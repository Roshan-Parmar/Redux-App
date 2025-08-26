import Home from "../pages/Home"
import Products from "../pages/Products"
import Login from "../pages/Login"
import Register from '../pages/Register'
import { Route,Routes } from "react-router-dom"
import Createproducts from "../pages/admin/Createproducts"
import Updateproduct from "../pages/admin/Updateproduct"
const MainRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin/createProduct" element={<Createproducts/>}/>
        <Route path="/admin/updateProduct" element={<Updateproduct/>}/>
        <Route path="/login" element={<Login/>}/>
     </Routes> 
    </>
  )
}

export default MainRoutes