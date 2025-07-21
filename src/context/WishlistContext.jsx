import { createContext,useContext, useState } from "react";

const WishlistContext=createContext();

export function WishlistProvider({children}){
   
    const [wishlistItem,setWishlistItem]=useState([]);

    function addtoWishlist(item){
        setWishlistItem([...wishlistItem,item]);
    }

    function removefromWishlist(item){
      setWishlistItem((prev)=>prev.filter((items)=>items.id !=item.id))
    }

    return(
        <>
        
        <WishlistContext.Provider value={{wishlistItem , addtoWishlist , removefromWishlist}}>
            {children}
        </WishlistContext.Provider>
        </>
    )
}


export function useWishlist(){
    return useContext(WishlistContext)
}