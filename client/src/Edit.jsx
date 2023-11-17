import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormField from "./componemt/FormField";

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [product, setProduct] = useState({
    _id: "",
    name: "",
    price: 0,
    category: "",
    image: "",
    spec: "",
    tags: [],
    __v: 0,
  });

  const handleChange = (_key, _value) => {
    setProduct({ ...product, [_key]: _value });
  };

  const handleSave = async () => {
    setSaveLoading(true);
    try {
      const res = await axios.patch(`http://localhost:5000/product/${id}`, {
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
        spec: product.spec,
        tags: product.tags,
      });

      if (res.status === 201) {
        setSaveLoading(false);
        alert("update successfull");
        nav("/");
      } else {
        setSaveLoading(false);
        alert("update successfull");
      }
    } catch (error) {
      setSaveLoading(false);
      alert("update failed");
    }
  };
  const getProductById = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/product/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(console.error(error));
      alert("product err");
      nav("/");
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  console.log(product);
  return (
    <div className=" text-teal-500">
      {loading ? (
        <div className=" flex justify-center align-middle text-8xl animate-bounce">
          Loading
        </div>
      ) : (
        <div className="p-9">
          <div className="mx-4 ">
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
                placeholder="name"
                inputType="text"
                value={product.category}
                handleChange={(e) => handleChange("category", e.target.value)}
              />
            </div>
            <div className=" flex gap-3">
              <FormField
                labelName="Price"
                placeholder="name"
                inputType="text"
                value={product.price}
                handleChange={(e) => handleChange("price", e.target.value)}
              />
              <FormField
                labelName="Spec"
                placeholder="name"
                inputType="text"
                value={product.spec}
                handleChange={(e) => handleChange("spec", e.target.value)}
              />
            </div>
            <div>
              <FormField
                className=" float-right"
                labelName="Image"
                placeholder="name"
                inputType="text"
                value={product.image}
                handleChange={(e) => handleChange("image", e.target.value)}
              />
            </div>
            <div className=" flex justify-end align-middle">
              <div
                className=" bg-teal-600 text-slate-100 px-6 py-2 rounded-md cursor-pointer hover:bg-teal-500"
                onClick={handleSave}
              >
                {saveLoading ? (
                  <span className=" animate-ping">Loading...</span>
                ) : (
                  <>update</>
                )}
              </div>
            </div>
            <img src={product.image} alt="" className="w-[500px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
