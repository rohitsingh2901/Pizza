import { useState,useEffect,useContext } from "react"
import { CartContext } from '../CartContext'
import Pizzas from '../components/Pizzas.json'
import { Link } from "react-router-dom"
import '../Style/cart.css'



const Cart = () => {
  let total =0;
  const [Product,setProduct]=useState([])
  const {cart,setCart} = useContext(CartContext);

  useEffect(()=>{
    if(!cart.item){
      return
    }
    const allItems = Array.from(Object.keys(cart.item));
    const filteredElements = Pizzas.filter(element => allItems.includes(element._id.$oid));
    setProduct(filteredElements)
  },[cart]) 

  const totalItem = (p)=>{
    return cart.item[p]
  }
  const increase = (i)=>{
    const existingQty = cart.item[i];
        const _cart = {...cart};
        _cart.item[i] = existingQty + 1;
        _cart.totalItem += 1;
        setCart(_cart)
  }
  const decrease = (i)=>{
        const existingQty = cart.item[i]
        if(existingQty===1){
          return
        }
        const _cart = {...cart}
        _cart.item[i] = existingQty - 1
        _cart.totalItem -= 1
        setCart(_cart)
  }
  const deletebtn = (i)=>{
        const existingQty = cart.item[i]
        const _cart = {...cart}
        delete _cart.item[i]
        _cart.totalItem -= existingQty 
        setCart(_cart)
        const updatedProductsList = Product.filter((product) => product._id.$oid !== i);
        console.log(updatedProductsList)
        setProduct(updatedProductsList);
  }

  const getPrice = (id,price)=>{
      const sum = totalItem(id)*price
      total+=sum
      return sum
  }

  const orderNow = ()=>{
    window.alert('Order Placed Successfully')
    setProduct([])
    setCart({})
  }


  return (
    Product.length > 0 ?
    <div className="container mx-auto mt-12">
      
        <ul> 
          <li><h1 className="my-12 mx-32 font-bold ">Cart Items</h1></li>                
          {
            Product.map(product => {
              return(
              <li key={product._id.$oid} className="cart flex justify-around items-center mb-6">
                <div className="cartText flex">
                <img className="cartimg h-16 w-16" src={"/pizza/"+product.image} alt="pizzaImage"></img>
                <h1 className="cartheading font-bold ml-4 w-48">{product.name}</h1>
                </div>
                <div className="flex justify-center items-center">
                  <button onClick={()=>decrease(product._id.$oid)} className='px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-yellow-500  hover:bg-yellow-700'>-</button> 
                  <p className="mx-5 font-bold">{totalItem(product._id.$oid)}</p>
                  <button onClick={()=>increase(product._id.$oid)} className='px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-yellow-500  hover:bg-yellow-700'>+</button>
                </div>
                <span>₹ {getPrice(product._id.$oid,product.price)}</span>
                <button onClick={()=>deletebtn(product._id.$oid)} className='px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-red-500  hover:bg-red-700'>Delete</button>
              </li>
              )
            })
          }

        </ul>
        <hr></hr>
        <div className="text-right mr-32 mt-6">
          <b>Grand Total : </b>
          <span>₹ {total}</span>
        </div>
        <div className="text-right mr-32">
          <button onClick={orderNow} className='px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-yellow-500  hover:bg-yellow-700'>Order Now</button>
        </div>
      
    </div>
     :
     <>
     <img className="container mx-auto h-96 w-96 mt-20" src="/pizza/empty-cart.png" alt="cart"></img>
     <div className="container mx-auto text-center mt-12">
      <h4><b>Let's fill the empty Cart</b></h4>
      <Link to='/pizza'><button className='px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-yellow-500  hover:bg-yellow-700'>Explore Pizzas</button></Link>
     </div>
     </>
  )
}

export default Cart
