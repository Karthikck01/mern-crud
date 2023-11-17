import productModel from "../model/productModel.js"

export const getProduct = async (req, res) => {
    try {
        const product = await productModel.find()
        res.send(200,product)
    } catch (error) {
        res.send(500,error.message)
    }
}
export const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productModel.findById(id)

        if (!product) {
            res.send(404, "product not found")
        } else {
            res.send(200,product)
        }
        
    } catch (error) {
        res.send(500,error.message)
    }
}

export const addProduct = async (req, res) => {
    try {
        const addproduct = await productModel.create(req.body)

        if (!addproduct) {
            res.send(300, {
                message: "failed to add"
            });
        } else {
            res.send(200,"saved successfully");
        }
    } catch (error) {
        res.send(500,error.message)
    }
}

export const updateProduct = async (req, res) => {

    const id = req.params.id;
    const updateFields = req.body;
    try {
        const update = await productModel.findByIdAndUpdate(id, updateFields)

        if (!update) {
            res.status(404).send("product not Found")
        } else {
            res.send(201, {
                message: "updated success",
                update,
            })
        }

    } catch (error) {
        res.send(500, "internal server error")
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const productDelete = await productModel.findByIdAndDelete(id);
        if (!productDelete) {
            res.send(404, {
                message: "product not found",
                productDelete
            })
        } else {
            res.send(200, {
                message: "product deleted",
                productDelete
            })
        }

    } catch (error) {
        res.send(500, error)
    }
}