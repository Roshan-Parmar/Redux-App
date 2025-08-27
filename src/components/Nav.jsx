import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {toast} from "react-toastify";
const Nav = () => {

  const user = useSelector((state)=> state.userReducer.data);
  // console.log(user);

  return (
    <>
  <div className="flex gap-6 mt-8 justify-center items-center bg-white py-4 rounded-xl">
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `px-3 py-2 rounded-lg text-sm font-medium transition duration-300 
      ${isActive ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`
    }
  >
    Home
  </NavLink>

  <NavLink 
    to="/products" 
    className={({ isActive }) => 
      `px-3 py-2 rounded-lg text-sm font-medium transition duration-300 
      ${isActive ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`
    }
  >
    Products
  </NavLink>

  {user ? (
    <>
      <NavLink 
        to="/admin/createProduct" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-lg text-sm font-medium transition duration-300 
          ${isActive ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`
        }
      >
        Create Product
      </NavLink>

      <NavLink 
        to="/admin/updateProduct" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-lg text-sm font-medium transition duration-300 
          ${isActive ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`
        }
      >
        Update Product
      </NavLink>

      {/* 🔴 Logout Button */}
      <button
        onClick={() => {
          localStorage.removeItem("userLogin");
          toast.success("Logged out successfully");
          window.location.href = "/login"; // redirect to home (or use navigate)
        }}
        className=" cursor-pointer px-3 py-2 rounded-lg text-sm font-medium transition duration-300 
  text-black hover:bg-red-600 hover:text-white shadow-md"
      >
        Logout
      </button>
    </>
  ) : (
    <NavLink 
      to="/login" 
      className={({ isActive }) => 
        `px-3 py-2 rounded-lg text-sm font-medium transition duration-300 
        ${isActive ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`
      }
    >
      Login
    </NavLink>
  )}
</div>
    </>
  );
};

export default Nav;