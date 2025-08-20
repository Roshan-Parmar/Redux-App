import axios from "./api/Axios";
import { useEffect } from "react";

const App = () => {

 const getPro = async ()=>{
   try {
    const apiCall = await axios.get("/products");
    console.log(apiCall);
  } catch (error) {
    console.log(error);
  }
 };

  useEffect(()=>{
    getPro();
  },[]);

  return (
    <>
    <h1>Hellow App</h1>
    </>
  )
}

export default App
