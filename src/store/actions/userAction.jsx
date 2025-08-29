import { toast } from "react-toastify";
import axios from "../../api/Axios";
import { loaduser } from "../reducer/UserSlice";

export const asyncCurrentUser = () => async(dispatch,getState)=>{
    try{
        const curUser = await JSON.parse(localStorage.getItem("userLogin"));
        if (curUser) dispatch(loaduser(curUser));
    }
    catch(error){
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async(dispatch,getState)=>{
    try{
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        localStorage.setItem("userLogin" , JSON.stringify(data));
        toast.success("Login successfully");
        dispatch(asyncCurrentUser());
    }
    catch(error){
        console.log(error);
    }
}
export const asyncRegisterUser = (user) => async(dispatch , getState)=>{
    try{
        const res = await axios.post("/users",user);
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}