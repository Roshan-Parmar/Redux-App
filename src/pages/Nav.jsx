import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Nav = () => {

  const user = useSelector((state)=> state.userReducer.data);
  // console.log(user);

  return (
    <>
    <div className="flex gap-1.5 mt-8 justify-around items-center">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    {
      user ? <>
      <NavLink to="/admin/createProduct">Create Product</NavLink> 
      <NavLink to="/admin/updateProduct">update Product</NavLink> 
      </> 
      :
      <><NavLink to="/login">Login</NavLink></>
    }
    </div>
    </>
  );
};

export default Nav;