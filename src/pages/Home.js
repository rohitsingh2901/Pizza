import Product from "../components/products"
import '../Style/navbar.css'
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="container flex justify-between items-center mx-auto" style={{height:'700px'}}>
        <div className="HomeText">
          <b><i>Are you hungry?</i></b>
          <p className=""><b>Don't wait!</b></p>
          <Link to="/pizza/products"><button className="px-5 py-2 my-3 rounded-full text-white font-bold bg-yellow-500  hover:bg-yellow-700">Order Now</button></Link>
        </div>
        <div className="">
          <img className="pizza " src="/pizza/pizza.png" alt="pizza"></img>
        </div>
      </div>
      <div>
        <Product/>
      </div>
    </>
  )
}

export default Home
