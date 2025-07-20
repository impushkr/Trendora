import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const navigate = useNavigate();

  const [input, setInput] = useState();

  function handlechange(e) {
    setInput(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (
      input.toLowerCase().replace(/\s/g, "")  == "man" ||
      input.toLowerCase().replace(/\s/g, "")  == "mens" ||
      input.toLowerCase().replace(/\s/g, "")  == "men's"||
      input.toLowerCase().replace(/\s/g, "")  == "men"||
      input.toLowerCase().replace(/\s/g, "")  == "shirts"||
      input.toLowerCase().replace(/\s/g, "")  == "shirt's"||
      input.toLowerCase().replace(/\s/g, "")  == "men"||
      input.toLowerCase().replace(/\s/g, "")  == "mentopwear"||
      input.toLowerCase().replace(/\s/g, "")  == "mantopwear"||
      input.toLowerCase().replace(/\s/g, "")  == "formen"||
      input.toLowerCase().replace(/\s/g, "")  == "formens"||
      input.toLowerCase().replace(/\s/g, "")  == "forman"||
      input.toLowerCase().replace(/\s/g, "")  == "formans"
    ) {
      navigate("/menTopWear");
    }

    else if (
      input.toLowerCase().replace(/\s/g, "")  == "watch" ||
      input.toLowerCase().replace(/\s/g, "")  == "watches" ||
      input.toLowerCase().replace(/\s/g, "")  == "men'swatches"||
      input.toLowerCase().replace(/\s/g, "")  == "watchesformen"||
      input.toLowerCase().replace(/\s/g, "")  == "watchesforboys"||
      input.toLowerCase().replace(/\s/g, "")  == "watchforboy"||
      input.toLowerCase().replace(/\s/g, "")  == "womenwatches"||
      input.toLowerCase().replace(/\s/g, "")  == "womenswatches"||
      input.toLowerCase().replace(/\s/g, "")  == "ladieswatch"
    ) {
      navigate("/watches");
    }

     else if (
      input.toLowerCase().replace(/\s/g, "")  == "mensfootwear" ||
      input.toLowerCase().replace(/\s/g, "")  == "shoes" ||
      input.toLowerCase().replace(/\s/g, "")  == "shoesformen"||
      input.toLowerCase().replace(/\s/g, "")  == "shoesformen's"||
      input.toLowerCase().replace(/\s/g, "")  == "shoesforboys"||
      input.toLowerCase().replace(/\s/g, "")  == "snikkers"||
      input.toLowerCase().replace(/\s/g, "")  == "footwearformen"||
      input.toLowerCase().replace(/\s/g, "")  == "footwearsformen"||
      input.toLowerCase().replace(/\s/g, "")  == "boot"
    ) {
      navigate("/menFootwear");
    }
    
     else if (
      input.toLowerCase().replace(/\s/g, "")  == "lower" ||
      input.toLowerCase().replace(/\s/g, "")  == "bottomwearformen" ||
      input.toLowerCase().replace(/\s/g, "")  == "menbottomwear"||
      input.toLowerCase().replace(/\s/g, "")  == "mensbottomwear"||
      input.toLowerCase().replace(/\s/g, "")  == "menslower"||
      input.toLowerCase().replace(/\s/g, "")  == "lowerformen"||
      input.toLowerCase().replace(/\s/g, "")  == "bottomwearformen"||
      input.toLowerCase().replace(/\s/g, "")  == "pant"||
      input.toLowerCase().replace(/\s/g, "")  == "formalpant"
    ) {
      navigate("/menBottomWear");
    }

     else if (
      input.toLowerCase().replace(/\s/g, "")  == "womentopwear" ||
      input.toLowerCase().replace(/\s/g, "")  == "top" ||
      input.toLowerCase().replace(/\s/g, "")  == "womenstopwear"||
      input.toLowerCase().replace(/\s/g, "")  == "womentopwears"||
      input.toLowerCase().replace(/\s/g, "")  == "top's"||
      input.toLowerCase().replace(/\s/g, "")  == "womenstopwears"||
      input.toLowerCase().replace(/\s/g, "")  == "kurti"||
      input.toLowerCase().replace(/\s/g, "")  == "shirtsforwomen"||
      input.toLowerCase().replace(/\s/g, "")  == "tshirtforwomen"
    ) {
      navigate("/womenTopWear");
    }

     else if (
      input.toLowerCase().replace(/\s/g, "")  == "heels" ||
      input.toLowerCase().replace(/\s/g, "")  == "sandles" ||
      input.toLowerCase().replace(/\s/g, "")  == "shoesforgils"||
      input.toLowerCase().replace(/\s/g, "")  == "womensfootwear"||
      input.toLowerCase().replace(/\s/g, "")  == "womenfootwear"||
      input.toLowerCase().replace(/\s/g, "")  == "jutti"||
      input.toLowerCase().replace(/\s/g, "")  == "womenshoes"||
      input.toLowerCase().replace(/\s/g, "")  == "womensfootwears"||
      input.toLowerCase().replace(/\s/g, "")  == "shoesforwomens"||
      input.toLowerCase().replace(/\s/g, "")  == "womenslippers"||
      input.toLowerCase().replace(/\s/g, "")  == "womensslippers"||
      input.toLowerCase().replace(/\s/g, "")  == "womensslipper"||
      input.toLowerCase().replace(/\s/g, "")  == "womenslipper"||
      input.toLowerCase().replace(/\s/g, "")  == "ladieschappal"||
      input.toLowerCase().replace(/\s/g, "")  == "ladieschppl"
    ) {
      navigate("/womenFootwear");
    }

    else if (
      input.toLowerCase().replace(/\s/g, "")  == "womenslower" ||
      input.toLowerCase().replace(/\s/g, "")  == "womenbottomwear" ||
      input.toLowerCase().replace(/\s/g, "")  == "womensbottomwear"||
      input.toLowerCase().replace(/\s/g, "")  == "womensbottomwears"||
      input.toLowerCase().replace(/\s/g, "")  == "womenbottomwears"||
      input.toLowerCase().replace(/\s/g, "")  == "lowersforwomen"||
      input.toLowerCase().replace(/\s/g, "")  == "bottomwearforwomen"||
      input.toLowerCase().replace(/\s/g, "")  == "womenjeans"||
      input.toLowerCase().replace(/\s/g, "")  == "womensjeans"
    ) {
      navigate("/womenBottomwear");
    }

    else if (
      input.toLowerCase().replace(/\s/g, "")  == "womenbags" ||
      input.toLowerCase().replace(/\s/g, "")  == "womenbag" ||
      input.toLowerCase().replace(/\s/g, "")  == "purse"||
      input.toLowerCase().replace(/\s/g, "")  == "womenspurse"||
      input.toLowerCase().replace(/\s/g, "")  == "ladiespurse"||
      input.toLowerCase().replace(/\s/g, "")  == "bags"||
      input.toLowerCase().replace(/\s/g, "")  == "purse"||
      input.toLowerCase().replace(/\s/g, "")  == "purseformens"||
      input.toLowerCase().replace(/\s/g, "")  == "purseformen"
    ) {
      navigate("/womenBags");
    }
    
    else if (
      input.toLowerCase().replace(/\s/g, "")  == "indianwear" ||
      input.toLowerCase().replace(/\s/g, "")  == "indian" ||
      input.toLowerCase().replace(/\s/g, "")  == "saari"||
      input.toLowerCase().replace(/\s/g, "")  == "dresses"||
      input.toLowerCase().replace(/\s/g, "")  == "dress"||
      input.toLowerCase().replace(/\s/g, "")  == "suit"||
      input.toLowerCase().replace(/\s/g, "")  == "punjabisuit"||
      input.toLowerCase().replace(/\s/g, "")  == "pakistanisuit"||
      input.toLowerCase().replace(/\s/g, "")  == "indianwearforwomens"||
      input.toLowerCase().replace(/\s/g, "")  == "forwomens"||
      input.toLowerCase().replace(/\s/g, "")  == "womens"||
      input.toLowerCase().replace(/\s/g, "")  == "forwomen"||
      input.toLowerCase().replace(/\s/g, "")  == "women"
    ) {
      navigate("/indianwear");
    }
    else if (
      input.toLowerCase().replace(/\s/g, "")  == "jwellery" ||
      input.toLowerCase().replace(/\s/g, "")  == "topas" ||
      input.toLowerCase().replace(/\s/g, "")  == "earrings"||
      input.toLowerCase().replace(/\s/g, "")  == "nosepin"||
      input.toLowerCase().replace(/\s/g, "")  == "necklace"||
      input.toLowerCase().replace(/\s/g, "")  == "bracelet"||
      input.toLowerCase().replace(/\s/g, "")  == "nosepins"||
      input.toLowerCase().replace(/\s/g, "")  == "bangles"||
      input.toLowerCase().replace(/\s/g, "")  == "choodha"
    ) {
      navigate("/jewellery");
    }
    else if (
      input.toLowerCase().replace(/\s/g, "")  == "forkids" ||
      input.toLowerCase().replace(/\s/g, "")  == "kidsdresses" ||
      input.toLowerCase().replace(/\s/g, "")  == "babydress"||
      input.toLowerCase().replace(/\s/g, "")  == "babydresses"||
      input.toLowerCase().replace(/\s/g, "")  == "dressesforkids"||
      input.toLowerCase().replace(/\s/g, "")  == "cutedresesforkids"||
      input.toLowerCase().replace(/\s/g, "")  == "dressesforchildren"||
      input.toLowerCase().replace(/\s/g, "")  == "childrendress"||
      input.toLowerCase().replace(/\s/g, "")  == "childrendresses"||
      input.toLowerCase().replace(/\s/g, "")  == "kids"||
      input.toLowerCase().replace(/\s/g, "")  == "forkids"||
      input.toLowerCase().replace(/\s/g, "")  == "forkid"
    ) {
      navigate("/kidsData");
    }
    else if (
      input.toLowerCase().replace(/\s/g, "")  == "sale" ||
      input.toLowerCase().replace(/\s/g, "")  == "summersale" ||
      input.toLowerCase().replace(/\s/g, "")  == "discount"||
      input.toLowerCase().replace(/\s/g, "")  == "discounteditems"||
      input.toLowerCase().replace(/\s/g, "")  == "cheapitems"||
      input.toLowerCase().replace(/\s/g, "")  == "offer"||
      input.toLowerCase().replace(/\s/g, "")  == "offers"||
      input.toLowerCase().replace(/\s/g, "")  == "wintersale"||
      input.toLowerCase().replace(/\s/g, "")  == "offer's"
    ) {
      navigate("/summerSale");
    }
  }

  return (
    <>
      <SearchContext.Provider value={{ input, handlechange, handlesubmit }}>
        {children}
      </SearchContext.Provider>
    </>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
