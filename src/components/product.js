import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext'
import { useContext,useState } from 'react';



const Product = (props) => {
  const {Product} = props
  const [isadd,setisAdd ]= useState(false)

  const {cart,setCart} = useContext(CartContext);
    // cart structure

    // const cart = {
    //   item  : {
    //     id1 : 'count',
    //     id2 : 'count',
    //   }
    // }

    function clickAdd(event,Product){
      event.preventDefault()
      let _cart = {...cart}
      if(!_cart.item){
        _cart.item = {}
      }
      if(!_cart.item[Product._id.$oid]){
        _cart.item[Product._id.$oid]=1;
      }
      else{
        _cart.item[Product._id.$oid]+=1
      }

      if(!_cart.totalItem){
        _cart.totalItem=0;
      }
        _cart.totalItem+=1;
      setCart(_cart)
      setisAdd(true)
      setTimeout(() => {
        setisAdd(false)
      }, 1000);
    }
    
      const top = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }


  return (
    <Link to={{pathname:`/pizza/products/${Product._id.$oid}`, state: {Product}}} onClick={top}>
      <div className='pro'>
                  <img className="ProductImg object-cover w-full" src={"/pizza/"+Product.image} alt="pizza"></img>
                  <div className="text-center">
                      <p className="font-bold my-1">{Product.name}</p>
                      <span className="px-5 py-1 my-3 w-fit text-xs  rounded-full bg-gray-300">{Product.size}</span>
                      <div className="flex justify-around items-center mt-4">
                          <span>₹ {Product.price}</span>
                          <button disabled = {isadd} onClick={(e)=>{clickAdd(e,Product)}} className={`${isadd===true ? 'px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-green-500' : 'px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-yellow-500  hover:bg-yellow-700' }`}>ADD{isadd===true ? 'ED':'' }</button>
                      </div>
                  </div>
      </div>
    </Link>
  )
}

export default Product
