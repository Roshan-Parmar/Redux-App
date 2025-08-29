import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { asyncLoginUser } from "../store/actions/userAction";
import axios from "../api/Axios";
import { useEffect, useState } from "react";
const Login = () => {

const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // ✅ important
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const fetchAdmin = async () => {
      const res = await axios.get("/users/1");
      reset({                      // ✅ update form values after fetch
        email: res.data.email,
        password: res.data.password,
      });
    };
    fetchAdmin();
  }, [reset]);


  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = async (data) => {
    dispatch(asyncLoginUser(data));
    navigate("/products");
  };

  return (
    <>
   <form
  onSubmit={handleSubmit(submitHandler)}
  className="flex flex-col items-start mx-55 my-10 w-1/3"
>
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

  <input
    {...register("email")}
    placeholder="write your email"
    type="email"
    className="px-3 py-2 w-full rounded-lg border border-gray-300 shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4 transition-all"
  />

  <input
    {...register("password")}
    placeholder="pas***rd"
    type="password"
    className="px-3 py-2 w-full rounded-lg border border-gray-300 shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4 transition-all"
  />

  <button
    className="px-6 py-2 rounded-2xl bg-indigo-500 text-white font-medium shadow-md 
    hover:bg-indigo-600 hover:scale-105 transition-transform duration-300"
  >
    Login
  </button>

  <p className="mt-4 text-gray-600 text-sm">
    Don't have an account?{" "}
    <NavLink className="text-indigo-600 font-medium hover:underline" to="/register">
      register?
    </NavLink>
  </p>
</form>

    </>
  );
};

export default Login;
