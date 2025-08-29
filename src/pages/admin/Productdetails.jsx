import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { asyncDeleteProduct, asyncUpdateProduct } from "../../store/actions/productAction";

const Productdetails = () => {
  const {id} = useParams();
 
  const products = useSelector((state) => state.productReducer.data);
  const product = products?.find((pro)=> pro.id == id);
  const user  =  useSelector((state) => state.userReducer.data?.[0]);
  const dispatch = useDispatch();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm(
    {
    defaultValues: {
    title: product?.title,
    description: product?.description,
    price: product?.price,
    category: product?.category,
    image: product?.image,
  },});

    const updateHandler = (product)=>{
      product.id = nanoid()
      console.log(product);
      dispatch(asyncUpdateProduct(product , id));
    }
    const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    }

  return product ? (
    <>
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-6 gap-8">
  <div className="flex-1 flex justify-center items-center">
    <img
      src={product.image}
      alt={product.title}
      className="w-full max-w-sm rounded-xl object-contain"
    />
  </div>
  <div className="flex-1 flex flex-col justify-center">
    <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h1>
    <h2 className="text-xl text-green-600 font-semibold mb-4">₹{product.price}</h2>
    <p className="text-gray-600 text-base leading-relaxed mb-4">
      {product.description}
    </p>
    <small className="text-sm text-indigo-600 font-medium uppercase mb-6">
      {product.category}
    </small>

    <div className="flex gap-4">
      <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
        Add to Cart
      </button>
      <button className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
        Buy Now
      </button>
    </div>
  </div>
</div>
  { user?.admin ? (
      <div>
   <form onSubmit={handleSubmit(updateHandler)} className="flex flex-col mx-55 my-8">
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
    <div className="flex mt-5 items-center gap-4">
  <button
    className=" cursor-pointer px-5 py-2 rounded-2xl bg-indigo-500 text-white font-medium shadow-md 
    hover:bg-indigo-600 hover:scale-105 transition-transform duration-300"
  >
    Update
  </button>

  <button onClick={handleSubmit(deleteHandler)}
    className="px-5 py-2 rounded-2xl bg-red-500 text-white font-medium shadow-md 
    hover:bg-red-600 cursor-pointer hover:scale-105 transition-transform duration-300"
  >
    Delete
  </button>
</div>

    </form>
</div>
    ) : <></>}
    </>
  ) : 
  <>
  <div className="flex justify-center items-center h-64">
    <p className="text-lg font-medium text-gray-600 animate-pulse">
      Loading...
    </p>
  </div>
</>

};

export default Productdetails;