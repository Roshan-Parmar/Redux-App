import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <div className="flex gap-1.5 mt-8 justify-around items-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
    </>
  );
};

export default Nav;