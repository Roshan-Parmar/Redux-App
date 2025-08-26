import axios  from "../../api/Axios";
import {loadproduct} from "../reducer/ProductSlice";
import { toast } from 'react-toastify';

export const asyncProductStore = ()=> async(dispatch , state)=>{
    try{
        const storeproduct = await axios.get("/products");
        dispatch(loadproduct(storeproduct.data));
        toast.success("Loaded data successfully");
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