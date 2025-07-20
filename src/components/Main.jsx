import { Link } from "react-router"

export default function Main(){

    return(
        <>

        <div className="flex flex-wrap justify-center gap-5 mt-4 md:mt-8 md:gap-10 ">

        <Link to="watches">
        <div className="flex flex-col gap-1 items-center font-medium text-xs lg:text-sm ">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="https://tse2.mm.bing.net/th/id/OIP.arl6uI-6dTOPpDfHPdO6mgHaHN?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="watch" />
          <p>Watches</p>
        </div>
        </Link>
       
        <Link to="womenBags">
        <div className="flex flex-col gap-1 items-center font-medium text-xs lg:text-sm ">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="https://tse4.mm.bing.net/th/id/OIP.GYutxjASFLgGMtalS2-UrwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="bags" />
          <p>Bags</p>
        </div>
        </Link>
        
        <Link to="jewellery">
        <div className="flex flex-col gap-1 items-center font-medium text-xs lg:text-sm ">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="https://th.bing.com/th/id/OIP.u212LfA11ebqafh_hd9F3QHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" 
          alt="jwellery" />
          <p>Jewellery</p>
        </div>
        </Link>

        <Link to="womenTopWear">
        <div className="flex flex-col gap-1 items-center font-medium text-xs lg:text-sm ">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/w-topwear.jpg" 
          alt="topwear image" />
          <p>Topwear</p>
        </div>
        </Link>

         <Link to="kidsData">
        <div className="flex flex-col gap-1 items-center font-medium text-xs lg:text-sm ">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/kids-topwear.jpg" 
          alt="watch" />
          <p>Kids </p>
         </div>
         </Link>
        
        <Link to="menBottomwear">
        <div className="flex flex-col gap-1 items-center font-medium leading-none text-xs lg:text-sm">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/m-lower.jpg" 
          alt="watch" />
          <p>Men's</p>
          <p>Bottom wear</p>
        </div>
        </Link>

        <Link to="womenFootwear">
        <div className="flex flex-col gap-1 items-center font-medium leading-none text-xs lg:text-sm">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/w-footwear.webp" 
          alt="women footwear" />
          <p>Women's</p>
          <p>Footwear</p>
        </div>
        </Link>

        <Link to="womenBottomwear">
        <div className="flex flex-col gap-1 items-center font-medium leading-none text-xs lg:text-sm">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/w-bottomwear.jpeg" 
          alt="" />
          <p>Women's</p>
          <p>Bottom wear</p>
        </div>
        </Link>
        
        <Link to="menFootwear">
        <div className="flex flex-col gap-1 items-center font-medium leading-none text-xs lg:text-sm">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/m-footwear.jpg" 
          alt="mens-shoes" />
          <p>Men's</p>
          <p>Footwear</p>
        </div>
        </Link>
        
        
        
        <Link to="menTopWear">
        <div className="flex flex-col gap-1 items-center font-medium text-xs lg:text-sm ">
          <img 
          className="shadow-lg rounded-2xl h-15 w-15 md:h-18 md:w-18 overflow-hidden"
          src="./src/assets/cloths-img/m-topwear.jpg" 
          alt="Men's topwear" />
          <p>Topwear</p>
        </div>
        </Link>
        
        

      </div>




      <div className="flex flex-wrap justify-center gap-5 mt-8 mb-5">
      
        
        <div className=" shadow-lg rounded-2xl h-50 overflow-hidden md:h-80 lg:h-120 xl:h-150" style={{width:"45%"}}>
          <Link to="menTopWear">
            <img className="" src="./src/assets/mens-collection.jpeg" alt="Mens Collection"/>
          </Link>     
        </div>
        

        
        <div className="shadow-lg rounded-2xl h-50 overflow-hidden md:h-80 lg:h-120 xl:h-150" style={{width:"45%"}}>
          <Link to="indianwear">
            <img src="./src/assets/female-collection.jpg" alt="Mens Collection" />
          </Link>
        </div>
        
         
        
        <div className="shadow-lg rounded-2xl h-50 overflow-hidden md:h-80 lg:h-120 xl:h-150" style={{width:"45%"}}>
          <Link to="kidsData">
            <img src="./src/assets/kids-collection.webp" alt="Mens Collection" />
          </Link>
        </div>
        

        
        <div className="shadow-lg rounded-2xl h-50 overflow-hidden md:h-80 lg:h-120 xl:h-150" style={{width:"45%"}}>
          <Link to="summerSale">
            <img src="./src/assets/SummerSale.png" alt="Mens Collection" />
          </Link>
        </div>
        

      
      </div>

      <div 
      className="bg-gray-300 h-[20vh] w-full flex justify-around mt-20 mb-10 items-center lg:text-2xl font-serif shadow "> 
        <h1 className="w-50  md:w-120">Scan this barcode to connect with us and stay in trend with Trendora.</h1>
        <img
        className="size-[14vh] rounded shadow" 
        src="./src/assets/qr.png" 
        alt="QR-Code" />
      </div>
        
        </>
    )
}