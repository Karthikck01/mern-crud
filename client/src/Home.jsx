import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
    const[product, setProduct] = useState(null);

    const getProduct = async () => {
      try {
        const product = await axios.get("http://localhost:5000/product");
        setProduct(product.data)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getProduct();
    },[])

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/product/${id}`)
            alert(res.data.message)
            getProduct();
        } catch (error) {
            alert(error)
        }
    }
    
  return (
    <>
    <div className="px-9">

      <div className=' flex justify-end align-middle p-3'>
        <Link to={'/add'} className=' bg-teal-500 text-slate-200 hover:bg-teal-400 px-4 py-2 rounded-md'>
          Add product
        </Link>
      </div>
        <table className=" table-auto w-full rounded overflow-hidden">
          <thead className="bg-gradient-to-r from-teal-400 to-teal-200 border-b-2">
            <tr>
              <th className="p-4">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>category</th>
              <th>spec</th>
              <th>tags</th>
              <th>Edit</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody className="text-center border-b-2 border-b-indigo-500">
            {product?.map((el, i) => (
              <tr key={i} className=" bg-slate-800 text-slate-300 hover:bg-slate-500">
              <td className=" w-20 border-1 border-slate-100">
                <img src={el.image} alt="" className="h-[100px] w-full"/>
              </td>
              <td className="p-3 border-1 border-slate-100">{el.name}</td>
              <td className="p-3 border-1 border-slate-100">{el.price}</td>
              <td className="p-3 border-1 border-slate-100">{el.category}</td>
              <td className="p-3 border-1 border-slate-100">{el.spec}</td>
              <td className="p-3 border-1 border-slate-100">{el.tags?.map((l, i) => (<span key={i}>{l} /</span>))}</td>
              <td className="p-3 border-1 border-slate-100">
                <Link to={`/edit/${el._id}`} className=' text-teal-400'>
                  Edit
                </Link>
                </td>
              <td className="p-3 border-1 border-slate-100 text-center">
                <span className='text-red-300 hover:underline text-lg' onClick={() => handleDelete(el._id)}>
                    Delete 
                </span>
              </td>

            </tr>
            ))}
          
          </tbody>
        </table>
        </div>
        </>
  )
}

export default Home