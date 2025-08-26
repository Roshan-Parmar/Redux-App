import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { asynCreateProduct } from "../../store/actions/productAction";

const Createproducts = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const submitHandler = (product)=>{
      product.id = nanoid()
      console.log(product);
      dispatch(asynCreateProduct(product));
      navigate("/products");
    }

  return (
    <>
     <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col mx-55 my-8">
    <input
    {...register('title')}
    placeholder="title" 
    type="text"
    className="outline-none border-b-2 w-1/3"
    />
    <input
    {...register('image')}
    placeholder="Enter image url" 
    type="url"
    className="outline-none border-b-2 w-1/3"
    />
    <input
    {...register('price')}
    placeholder="Enter product price" 
    type="number"
    className="outline-none border-b-2 w-1/3"
    />
    <textarea
    {...register('description')}
    placeholder="description" 
    className="outline-none mt-5 border-b-2 w-1/3">
    </textarea>
    <input
    {...register('category')}
    placeholder="Category" 
    type="text"
    className="outline-none border-b-2 w-1/3"
    />
    <div className="flex mt-5 items-center ">
    <button className="p-2 cursor-pointer rounded-2xl hover:scale-110 
    transition-all bg-blue-400 font-medium w-fit">
    create
    </button>
    </div>
    </form>
    </>
  )
}

export default Createproducts