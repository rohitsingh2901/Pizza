import Product from "../components/products"
import '../Style/navbar.css'

function Home() {
  return (
    <>
      <div className="container flex justify-between items-center mx-auto" style={{height:'700px'}}>
        <div>
          <b><i>Are you hungry?</i></b>
          <b><p className="text-5xl mt-2">Don't wait!</p></b>
          <button className="px-5 py-2 my-3 rounded-full text-white font-bold bg-yellow-500  hover:bg-yellow-700">Order Now</button>
        </div>
        <div className="w-1/2">
          <img className="pizza w-4/5" src="/pizza.png" alt="pizza"></img>
        </div>
      </div>
      <div>
        <Product/>
      </div>
    </>
  )
}

export default Home
