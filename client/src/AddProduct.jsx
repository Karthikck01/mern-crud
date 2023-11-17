import React, { useState } from 'react'
import FormField from './componemt/FormField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const nav = useNavigate()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        category: "",
        image: "",
        spec: "",
        tags: ["phone", "mobile"],
      });
    
      const handleChange = (_key, _value) => {
        setProduct({ ...product, [_key]: _value });
      };

      const handleAdd = async () => {
        setLoading(true)
        try {
            const res = await axios.post("http://localhost:5000/product", product);

            if (res.status === 200) {
                alert("product added")
                nav('/')
            } else {
                alert("product not added")
            }
        } catch (error) {
            alert("product not added", error)
        }
      }
  return (
    <div className=' p-9'>
        <div className="text-teal-400 text-5xl">
            Add Product
        </div>
        <div className=" mt-4">
            <div className=" flex gap-3">
              <FormField
                labelName="Name"
                placeholder="name"
                inputType="text"
                value={product.name}
                handleChange={(e) => handleChange("name", e.target.value)}
              />
              <FormField
                labelName="Category"
                placeholder="Category"
                inputType="text"
                value={product.category}
                handleChange={(e) => handleChange("category", e.target.value)}
              />
            </div>
            <div className=" flex gap-3">
              <FormField
                labelName="Price"
                placeholder="Price"
                inputType="text"
                value={product.price}
                handleChange={(e) => handleChange("price", e.target.value)}
              />
              <FormField
                labelName="Spec"
                placeholder="Spec"
                inputType="text"
                value={product.spec}
                handleChange={(e) => handleChange("spec", e.target.value)}
              />
            </div>
            <div>
              <FormField
                className=" float-right"
                labelName="Image"
                placeholder="Image"
                inputType="text"
                value={product.image}
                handleChange={(e) => handleChange("image", e.target.value)}
              />
            </div>
            <div className=" flex justify-end align-middle">
              <div
                className=" bg-teal-600 text-slate-100 px-6 py-2 rounded-md cursor-pointer hover:bg-teal-500"
                onClick={handleAdd}
              >
                {loading ? (
                  <span className=" animate-ping">Loading...</span>
                ) : (
                  <>Add</>
                )}
              </div>
            </div>
            <img src={product.image} alt="" className="w-[500px]" />
          </div>
    </div>
  )
}

export default AddProduct