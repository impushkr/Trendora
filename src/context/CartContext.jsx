import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export function CartProvider({children}){

    const[cartItem,setCartItem]=useState([]);


    cartItem.map((items)=>{
        if(items.quantity==0){
           remove(items);
        }
    })

    function additem(product){
        setCartItem((previous)=>{
            const existing = previous.find((items)=>items.id==product.id)

            if(existing){
                return previous.map((items)=>items.id===product.id? 
            {...items, quantity: items.quantity+1 ,discountedPrice : product.discountedPrice*(product.quantity+1) , price:product.price*(items.quantity+1)}:items)
            }

            return[...previous,{...product,quantity:1}]
        })
    }

    function reduce(item){
        setCartItem((previous)=>{
            return previous.map((products)=>products.id==item.id?
            {...products,quantity:products.quantity-1}:products)
        })
    }
 
    function remove(item){
        setCartItem((prevItem)=>
            prevItem.filter((items)=>items.id != item.id)
        )
    }



    return(
        <>
        <CartContext.Provider value={{cartItem,additem,reduce,remove}}>
            {children}
        </CartContext.Provider>
        </>
    )
}


export function useCart(){
    return useContext(CartContext);
}