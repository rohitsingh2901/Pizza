import {useState,useContext} from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import Pizzas from './Pizzas.json';
import { CartContext } from '../CartContext';

const SingleProduct = () => {
    const [isadd,setisAdd ]= useState(false)
    const {cart,setCart} = useContext(CartContext);
    function clickAdd(event,Product){
        console.log(Product)
        event.preventDefault()
        let _cart = {...cart}
        if(!_cart.item){
          _cart.item = {}
        }
        if(!_cart.item[Product._id]){
          _cart.item[Product._id]=1;
        }
        else{
          _cart.item[Product._id]+=1
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
    // const [Product,setProduct] = useState({});
    const Params = useParams()
    // From server
    // useEffect(()=>{
    //     fetch(`/api/products/${Parms._id}`)
    //     .then(res=>res.json())
    //     .then(product=>{
    //         setProduct(product)
    //     })
    // },[]);

    const filteredData = Pizzas.filter(obj => {
        return obj._id.$oid === Params._id
    });

    const History = useNavigate();


  return (
    <>
    <div className='container mx-96 mt-12 font-bold'>
        <button className='px-5 py-2 my-3 w-fit rounded-full text-base text-black' onClick={()=>{History(-1)}}>←Back</button>
    </div>
    <div className='container mx-auto mt-12 flex justify-center'>
        <img className='h-72 w-96' src={'/pizza/'+filteredData[0].image} alt='Pizza-img'></img>
        
    </div>

    <div className="container mx-auto text-center">
                    <p className="font-bold my-1">{filteredData[0].name}</p>
                    <span className="px-5 py-1 my-3 w-fit text-xs  rounded-full bg-gray-300">{filteredData[0].size}</span>
                    <div className="flex justify-center items-center mt-4">
                         <b><h4 className="mx-8">₹ {filteredData[0].price}</h4></b>
                        <button disabled = {isadd} onClick={(e)=>{clickAdd(e,Params)}} className={`${isadd===true ? 'px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-green-500' : 'px-5 py-2 my-3 w-fit rounded-full text-xs  font-bold bg-yellow-500  hover:bg-yellow-700' }`}>ADD{isadd===true ? 'ED': ''}</button>
                    </div>
                </div>
    </>

  )
}

export default SingleProduct
