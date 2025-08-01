import { useCart } from "../context/CartContext";
import {useNavigate } from "react-router";

export default function Cart() {

  const { cartItem, additem, reduce, remove } = useCart();
  
  const total = cartItem.reduce((sum,item)=>sum+item.totaldiscount,0);
  const navigate = useNavigate();


  return (
    <>
    {

      cartItem.length > 0 ? (
        <div className="p-5 mt-5 mb-10 md:mt-30 flex flex-col items-center bg-gray">
        <div className="flex flex-col pt-10 pr-5 p-10 gap-5 shadow">
          {cartItem.map((product) => (
            <div className="flex">
              <div className="flex w-[30vh] justify-center">
                <img
                  className="h-[20vh] rounded-3xl"
                  src={product.imageUrl}
                  alt="product image"
                />
                <div className="absolute mt-36 flex bg-white h-7 w-15 justify-between items-center text-gray-500 rounded">
                  <button
                    onClick={() => reduce(product)}
                    className="h-7 w-5  rounded bg-white text-center"
                  >
                    -
                  </button>
                  <div>{product.quantity}</div>
                  <button
                    onClick={() => additem(product)}
                    className="h-7 w-5  rounded bg-white text-center"
                  >
                    +
                  </button>{" "}
                </div>
              </div>

              <div className="h-[20vh] ">
                <h2 className="font-medium lg:mb-2">{product.title}</h2>
                <p className="text-gray-500">{product.subTitle.slice(0, 30)}</p>
                <div>
                  <span>
                    <strong>₹ {product.totaldiscount}</strong>
                  </span>
                  {product.discount > 0 ? (
                    <>
                      <span className="ml-3 line-through text-gray-500">
                        ₹{product.actualprice}
                      </span>
                      <p className="ml-2 text-green-700">
                        ({product.discount} %OFF)
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <button
                  onClick={() => remove(product)}
                  className="mt-3 lg:mt-5 ml-2 lg:ml-1 border p-1 rounded font-medium hover:scale-97"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between  border-b  mt-10 border-gray-300">
            <div className="font-medium">
              <p> Bill Details</p>
              <div className="text-gray-500 mb-3">
                <p>Item Total</p>
                <p>Delivery fee </p>
                <p>GST & Other tax's</p>
              </div>
            </div>
            <div className="text-gray-500 mt-5">
              <p>₹ {total}</p>
              <p>₹ 85</p>
            </div>
          </div>

          <div className="flex justify-between mt-3 font-bold">
            <p>Total</p>
            <p>₹{total+85}</p>
          </div>

          <button className="mt-5 h-10  font-bold text-white bg-blue-500 rounded-2xl" onClick={()=>{navigate("/payment")}}>
            CLICK HERE TO PROCEED
          </button>
          
        </div>

        
      </div>

      ):
      (
        <>
        <div className="h-[90vh] lg:mt-40 flex flex-col mt-[20vh] p-8 items-center text-center gap-10">
            <h1 className="font-serif text-3xl rounded-3xl">
              Your Cart is empty ☹️
            </h1>
            <Link to ="/products">
              <button className=" w-[20vh] h-[5vh] bg-blue-600 text-white font-semibold rounded-2xl text-md shadow">
                View Products
              </button>
            </Link>
          </div>
          
          </>
      )
    }
      
      
    </>
  );
}
