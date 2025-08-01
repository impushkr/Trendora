import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { useState } from "react";

export default function Nav() {
  const { input, handlechange, handlesubmit } = useSearch();
  const { cartItem } = useCart();

  const [slide, setSlide] = useState(false);

  return (
    <nav className=" flex flex-col items-center">
      <div className="z-100 flex shadow items-center justify-between gap-6 top-0 sm: h-14  md:h-18 overflow-hidden bg-white w-full fixed">
        <div className="flex gap-2 items-center ml-2">
          <button onClick={() => setSlide(!slide)} className=" size-7 p-1">
            <img src="/menu.png" alt="menu" />
          </button>
          <Link to="/">
            <img
              src="/Logo.png"
              alt="Logo"
              className="sm: h-24  md:h-27 w-27 "
            />
          </Link>
        </div>

        <div
          className={` fixed h-full w-full top-0 z-105 ${
            !slide ? "pointer-events-none" : null
          }`}
          onClick={() => (slide ? setSlide(!slide) : null)}
        >
          <div
            className={`flex flex-col bg-white shadow h-[60vh] w-[30vh] font-medium items-center top-0  duration-300 ${
              slide ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex gap-2 h-15 w-full items-center justify-center border-b relative">
              <img
                className="size-6"
                src="/profileicon.png"
                alt="Profile Icon"
              />
              <h2>Login</h2>
              <button
                className="absolute top-0  right-1 text-3xl text-shadow-2xs  rounded w-[3vh]"
                onClick={() => setSlide(!slide)}
              >
                ×
              </button>
            </div>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="/">Home</Link>
            </button>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="#">Your Orders</Link>
            </button>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="/wishlist">Your wishlist</Link>
            </button>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="/cart">Your cartlist</Link>
            </button>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="#">About Us</Link>
            </button>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="https://www.linkedin.com/in/pushkar-singh-2572542b1">
                Contack us
              </Link>
            </button>
            <button
              className="shadow h-14 w-full"
              onClick={() => setSlide(!slide)}
            >
              <Link to="#">Help !</Link>
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-gray-200 w-md h-10 lg:w-svh rounded-2xl overflow-hidden">
          <form
            onSubmit={handlesubmit}
            className="flex items-center gap-5 pl-3"
          >
            <img className="size-6" src="/search-icon.png" alt="Search" />

            <input
              className="h-10 w-[25vw] focus:outline-none "
              type="text"
              placeholder="  Search for products here..."
              value={input}
              onChange={handlechange}
            />
          </form>
        </div>

        <div className="flex gap-5 font-bold items-center mr-5 lg:mr-8 lg:gap-10">
          <div className="flex gap-2 items-center">
            <img className="size-6" src="/profileicon.png" alt="Profile Icon" />
            <h2>Login</h2>
          </div>

          <div className="flex items-center ">
            <Link to="wishlist">
              <img
                className="size-7 lg:hidden xl:block"
                src="/wishlist-icon.jpg"
                alt="wishlish-icon"
              />
            </Link>
            <Link to="wishlist">
              <h2 className="hidden lg:block">Wishlist</h2>
            </Link>
          </div>

          <div className="flex items-center ">
            <Link to="cart">
              <img
                className="size-6 lg:hidden xl:block "
                src="/carticon.jpg"
                alt="cart-icon"
              />
            </Link>

            <Link to="cart">
              <h2 className="hidden lg:block">Cart</h2>
            </Link>
            {cartItem.length > 0 ? (
              <p className="text-xs text-center mb-4 bg-gray-300 w-4 rounded-2xl">
                {cartItem.length}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <form
        className="flex rounded-2xl w-[95%] items-center gap-4 ml-1 h-12 bg-gray-200 mt-17 md:hidden"
        onSubmit={handlesubmit}
      >
        <img className="size-6 ml-3" src="/search-icon.png" alt="Search" />
        <input
          value={input}
          onChange={handlechange}
          className="h-10 w-md focus:outline-none"
          type="text"
          placeholder="Search for products here...."
        />
      </form>
    </nav>
  );
}
