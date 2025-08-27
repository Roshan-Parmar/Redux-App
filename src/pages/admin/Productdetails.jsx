import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Productdetails = () => {
  const {id} = useParams();
  // console.log(id);
  const products = useSelector((state) => state.productReducer.data);
  const product = products?.find((pro)=> pro.id == id);
  // console.log(product);

  return product ? (
    <>
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-6 gap-8">
  {/* Product Image */}
  <div className="flex-1 flex justify-center items-center">
    <img
      src={product.image}
      alt={product.title}
      className="w-full max-w-sm rounded-xl object-contain"
    />
  </div>

  {/* Product Details */}
  <div className="flex-1 flex flex-col justify-center">
    <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h1>
    <h2 className="text-xl text-green-600 font-semibold mb-4">₹{product.price}</h2>
    <p className="text-gray-600 text-base leading-relaxed mb-4">
      {product.description}
    </p>
    <small className="text-sm text-indigo-600 font-medium uppercase mb-6">
      {product.category}
    </small>

    {/* Action Buttons */}
    <div className="flex gap-4">
      <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
        Add to Cart
      </button>
      <button className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
        Buy Now
      </button>
    </div>
  </div>
</div>
    </>
  ) : 
  <>
  <div className="flex justify-center items-center h-64">
    <p className="text-lg font-medium text-gray-600 animate-pulse">
      Loading...
    </p>
  </div>
</>

};

export default Productdetails;