import {useForm} from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { asyncRegisterUser } from "../store/actions/userAction";
import { nanoid } from "@reduxjs/toolkit";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const submitHandler = (data)=>{
      data.id = nanoid()
      data.admin = false;
      dispatch(asyncRegisterUser(data));
      navigate("/login")
    }

  return (
    <>
   <form
  onSubmit={handleSubmit(submitHandler)}
  className="flex flex-col flex-start bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
>
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>

  <input
    {...register("name")}
    placeholder="Write your name"
    type="text"
    className="px-4 py-2 mb-4 w-full rounded-lg border border-gray-300 shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
  />

  <input
    {...register("email")}
    placeholder="Write your email"
    type="email"
    className="px-4 py-2 mb-4 w-full rounded-lg border border-gray-300 shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
  />

  <input
    {...register("password")}
    placeholder="pas***rd"
    type="password"
    className="px-4 py-2 mb-6 w-full rounded-lg border border-gray-300 shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
  />

  <div className="flex items-center justify-between">
    <button
      className="px-6 py-2 rounded-2xl bg-indigo-500 text-white font-medium shadow-md 
      hover:bg-indigo-600 hover:scale-105 transition-transform duration-300"
    >
      Register
    </button>

    <p className="text-sm text-gray-600">
      Already have an account?{" "}
      <NavLink className="text-indigo-600 font-medium hover:underline" to="/login">
        login?
      </NavLink>
    </p>
  </div>
</form>

    </>
  )
}

export default Register