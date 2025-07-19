export default function Nav() {
  return (
    <>
      <nav className="z-100 flex shadow items-center justify-between gap-6 top-0 sm: h-14  md:h-18 overflow-hidden bg-white w-full fixed">


        <div className="flex gap-2 items-center ml-2">
          <button className=" size-7 p-1">
            <img
              className="sm: md:hidden"
              src="./src/assets/menu.png"
              alt="menu"
            />
          </button>

          <img
            src="./src/assets/Logo.png"
            alt="Logo"
            className="sm: h-24  md:h-27 w-27 "
          />
        </div>






        <div
          className="hidden md:block bg-gray-200 w-md h-10 lg:w-svh"
          style={{ borderRadius: "10px", overflow: "hidden",  }}
        >
          <form className="flex items-center gap-5 pl-3">
            <img className="size-6" src="./src/assets/search-icon.png" alt="Search" />

            <input
              className="h-10 w-md focus:outline-none"
              type="text"
              placeholder="  Search for products here..."
            />
          </form>
        </div>





        <div className="flex gap-5 font-bold sm: mr-4 ">
          <div className="flex gap-2 items-center">
            <img
              className="size-6"
              src="./src/assets/profileicon.png"
              alt="Profile Icon"
            />
            <h2>Login</h2>
          </div>

          <h2 className="hidden md:block mr-5 ml-5">Wishlist</h2>

          <div className="flex items-center gap-1 md:mr-10">
            <img
              className="size-5 "
              src="./src/assets/cart-icon.jpg"
              alt="cart-icon"
            />
            <h2 className="hidden md:block">Cart</h2>
          </div>
        </div>

      </nav>

   
       <div className="flex items-center gap-4 ml-1 h-12 bg-gray-200 mt-20 md:hidden" style={{borderRadius:"10px" , width: "98%"}}>
            <img className="size-6 ml-3" src="./src/assets/search-icon.png" alt="Search" />
            <input className="h-10 w-md focus:outline-none" type="text" placeholder="Search for products here...." />
        </div>
    </>
  );
}
