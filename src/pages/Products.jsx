import { useSelector } from "react-redux"

const Products = () => {
  const products = useSelector((state) => state.productReducer.data);
  console.log(products);
  // const res  = products.map((item,index)=>{
  //   return <div key={item.id}>
  //   <div>{products.title}</div>
  //   <div>{products.description}</div>
  //   <div>{products.category}</div>
  //   <div>{products.price}</div>
  //   </div>
  // });

  return (
    <>
    {/* {
      res
    } */}
    </>
  )
}

export default Products
