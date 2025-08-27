// import { useState } from "react";
import {useForm} from "react-hook-form";
import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux";
import { asyncLoginUser } from "../store/actions/userAction";
const Login = () => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data)=>{
    dispatch(asyncLoginUser(data))
  }

  return (
    <>
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col mx-55 my-8">
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
    <button className="mt-5 p-2 cursor-pointer rounded-2xl  hover:scale-110 
    transition-all bg-blue-400 font-medium w-fit">
      click me
    </button>
    <p>Don't have account  
    <NavLink className= "text-blue-600" to="/register" > register?</NavLink>
    </p>
    </form>
    </>
  )
}

export default Login