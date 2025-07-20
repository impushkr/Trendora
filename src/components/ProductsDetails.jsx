import { useCart } from "../context/CartContext";

import {
  indianWear,
  jewellary,
  womenBags,
  womenBottomwear,
  womenFootwear,
  womenTopWear,
} from "../data/womens/data";
import {
  menBottomWear,
  menFootWear,
  menTopWear,
  watches,
} from "../data/mens/data";

import { kidsData } from "../data/kids/data";

import { useParams } from "react-router";

export default function ProductsDetails(){

const{id}=useParams()

const products = indianWear.find((item)=>item.id==id)||
jewellary.find((item)=>item.id==id)||
womenBags.find((item)=>item.id==id)||
womenBottomwear.find((item)=>item.id==id)||
womenFootwear.find((item)=>item.id==id)||
womenTopWear.find((item)=>item.id==id)||
menBottomWear.find((item)=>item.id==id)||
menFootWear.find((item)=>item.id==id)||
menTopWear.find((item)=>item.id==id)||
watches.find((item)=>item.id==id)||
kidsData.find((item)=>item.id==id);

const{cartItem,additem}=useCart()

return(<>

<div className="w-full md:p-5 mt-5 md:mt-18 relative">

    <div className="flex flex-wrap justify-center   ">
    <div className="widht-full md:w-[55vh] overflow-hidden shadow">    
    <img
    className="object-fit"
    src={products.imageUrl} 
    alt="Product-Image" />
    </div>
    

    <div className="bg-white p-5 w-full md:w-[55vh] shadow text-center lg:text-justify">
        <h2 className="text-3xl font-medium mb-5">{products.title}</h2>
        <p className="mb-5" >{products.subTitle}</p>
        <span><strong>₹ {products.discountedPrice}</strong></span>
        {products.discount > 0 ?
        (<>
            <span className="ml-3 line-through">₹ {products.price}</span>
            <span className="ml-8 text-green-700">({products.discount} %OFF)</span>
         </>
        ):<>
        </>}
        
        <div className="flex justify-around mt-8 lg:mt-99">
        { cartItem.find((item)=>item.id==products.id )?
        (
        <button 
        
        className="font-bold text-white bg-gray-500 w-[20vh] h-[6vh] rounded-2xl shadow" disabled={true}>
        ADDED</button>
        ):
        (
        <button 
        onClick={()=>additem(products)}
        className="font-bold text-white bg-blue-500 w-[20vh] h-[6vh] rounded-2xl shadow hover:scale-95">
        ADD TO CART</button>
        )}

        <button className="font-bold text-white bg-blue-500 w-[20vh] h-[6vh] rounded-2xl shadow hover:scale-95">BUY NOW</button>
        </div>

        </div>

    </div>
</div>


</>)


}

