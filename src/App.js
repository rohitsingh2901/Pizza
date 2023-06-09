import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import Navigation from './components/navigation'
import Product from './pages/product'
import Cart from './pages/cart'
import SingleProduct from './components/SingleProduct'
import { CartContext } from './CartContext'

import { useState,useEffect } from 'react'

function App(){
    const [cart,setCart]= useState({})

    useEffect(()=>{
       const cart = window.localStorage.getItem('cart');
       setCart(JSON.parse(cart))
    },[])
    useEffect(()=>{
        window.localStorage.setItem('cart',JSON.stringify(cart));
    },[cart])

    


    return (
   
        <Router>
            <CartContext.Provider value={{cart,setCart}}>
                <Navigation/>
                {/* <Link to='/'>Home</Link> */}
                {/* <Link to='/about'>About</Link> */}
                <Routes>
                    <Route path='pizza/' Component={Home}></Route>
                    {/* <Route path='/about' Component={About}></Route> */}
                    <Route path='pizza/products' Component={Product}></Route>
                    <Route path='pizza/products/:_id' Component={SingleProduct}></Route>

                    <Route path='pizza/cart' Component={Cart}></Route>
                </Routes>
            </CartContext.Provider>
        </Router>


    )
}

export default App;