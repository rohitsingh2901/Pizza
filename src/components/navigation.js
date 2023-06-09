import { Link } from "react-router-dom"
import '../Style/navbar.css'
import { useContext} from "react"
import { CartContext } from "../CartContext"

const Navigation = () => {
    // const cartstyle = {
    //         backgroundColor : '#F59E0D',
    //         height : 35,
    //         width : 70,
    //         display : 'flex',
    //         padding : '4px 10px',
    //         borderRadius : 40
    // }
    const {cart} = useContext(CartContext)
    // console.log(cart)
  return (
    <nav className="navbar w-full bg-slate-900 text-white">
        <div className="container mx-auto flex justify-between">
        <Link  to='pizza/'>
                <img className=" h-16 w-16" src='/pizza/logo.png' alt='logo'></img>
        </Link>
        <ul className="flex items-center my-3">
            <li className="mx-5"><Link to='pizza/'>Home</Link></li>
            <li className="mx-5"><Link to='pizza/products'>Products</Link></li>
            <li className="mx-5">
                <Link to='pizza/cart'>
                    <div className="items-center justify-center h-9 w-20 flex rounded-full text-black font-bold bg-yellow-500  hover:bg-yellow-700" >
                        <span>{cart.totalItem ? cart.totalItem : 0}</span>
                        <img src="/pizza/cart.png" alt="cart"></img>
                    </div>
                </Link></li>
        </ul>
        
        </div>

    </nav>
  )
}

export default Navigation
