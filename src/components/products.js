import Product from './product'
// import { useState } from 'react'
import Pizzas from './Pizzas.json';
import '../Style/product.css'
// import { CartContext } from '../CartContext';
// import { useContext } from 'react'


const Products = () => {
      // const Cart = useContext(CartContext)
      // const[Products,setProducts] = useState({});
      // fetch('/api/products')
      // .then(res => res.json())
      // .then((json)=>{
      //   console.log(json)
      // })
      // console.log(Cart)

  return (
    <div className="container mx-auto pb-24">
        <h1 className="font-bold my-5">Products</h1>
        <div className="ProductGrid gap-24">
            {
              Pizzas.map(Pizza=> <Product key={Pizza._id.$oid} Product={Pizza}/>)
            }
        </div>
      
    </div>
  )
}

export default Products
