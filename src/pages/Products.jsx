import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Products = () => {
  const products = useSelector((state) => state.productReducer.data);
  const res = products.map((item) => {
  return (
    <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {item.description}
      </p>

      <span className="text-xs font-medium text-indigo-600 uppercase mb-4">
        {item.category}
      </span>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-xl font-bold text-green-600">
          ₹{item.price}
        </span>

        <NavLink
          to={`/products/${item.id}`}
          className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
        >
          More Info
        </NavLink>
      </div>
    </div>
  );
});

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {res}
      </div>
    </>
  );
};

export default Products;
