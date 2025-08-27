import axios from "../../api/Axios";
import { loaduser } from "../reducer/UserSlice";

export const asyncCurrentUser = () => async(dispatch,getState)=>{
    try{
        const curUser = JSON.parse(localStorage.getItem("userLogin"));
        if (curUser) dispatch(loaduser(curUser));
        // else console.log("user not found!!");
    }
    catch(error){
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async(dispatch,getState)=>{
    try{
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        localStorage.setItem("userLogin" , JSON.stringify(data));
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