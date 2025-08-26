import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../../store/actions/userAction";
import { nanoid } from "@reduxjs/toolkit";

const Updateproduct = () => {
  const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const submitHandler = (data)=>{
      data.id = nanoid()
      dispatch(asyncRegisterUser(data));
    }

  return (
    <>
     <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col mx-55 my-8">
    <input
    {...register('name')}
    placeholder="write your name" 
    type="name"
    className="outline-none border-b-2 w-1/3"
    />
    <input
    {...register('email')}
    placeholder="write your email" 
    type="email"
    className="outline-none border-b-2 w-1/3"
    />
    <input
    {...register('password')}
    placeholder="pas***rd" 
    type="password"
    className="outline-none mt-5 border-b-2 w-1/3"
    />
    <div className="flex mt-5 items-center ">
    <button className="p-2 cursor-pointer rounded-2xl hover:scale-110 
    transition-all bg-blue-400 font-medium w-fit">
    update
    </button>
    </div>
    </form>
    </>
  )
}

export default Updateproduct
