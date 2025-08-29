import axios  from "../../api/Axios";
import {loadproduct} from "../reducer/ProductSlice";
import { toast } from 'react-toastify';

export const asyncProductStore = ()=> async(dispatch , state)=>{
    try{
        const storeproduct = await axios.get("/products");
        dispatch(loadproduct(storeproduct.data));
    }
    catch(error){
        console.log("Got some error" , error);
    }
}
export const asynCreateProduct = (product) => async(dispatch , state) =>{
    try{
        const res = await axios.post("/products" , product);
        if(res){
            toast.success("Product Saved to the database successfully");
        }
        dispatch(asyncProductStore());
    }
    catch(error){
        console.log(error);
    }
}

export const asyncUpdateProduct = (product , id) => async (dispatch , state) =>{
    try{
        const res = await axios.patch("/products/" + id , product);
        if(res){
            toast.success("Updated successfully");
        }
        dispatch(asyncProductStore());
    }
    catch(error){
        console.log(error);
    }
}

export const asyncDeleteProduct = (id) => async (dispatch , state) =>{
    try{
        const res = await axios.delete("/products/" + id);
        if(res){
            toast.success("Deleted successfully");
        }
        dispatch(asyncProductStore());
    }
    catch(error){
        console.log(error);
    }
}