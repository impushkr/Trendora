import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router";

export default function WishList() {
  const { wishlistItem, addtoWishlist, removefromWishlist } = useWishlist();

  return (
    <>
      {wishlistItem.length > 1 ? (
        <div className="flex flex-wrap justify-center-safe gap-5 mt-5 bg-gray-100 pt-10 pb-15 md:mt-15 ">
          {wishlistItem.map((item) => (
            <Link to={`/products/${item.id}`}>
              <div className="hover:scale-105 flex flex-col overflow-hidden shadow rounded-2xl h-70 w-43  lg:h-100 lg:w-70 ">
                <div
                  className="overflow-hidden relative"
                  style={{ height: "80%", width: "100%" }}
                >
                  <img src={item.imageUrl} alt="Item-Image" />
                </div>

                <div className="pl-2 bg-white lg:ml-3">
                  <h4 className="font-medium lg:text-lg">{item.title}</h4>
                  <p className="text-sm">
                    {item.subTitle.slice(0, 15) + "..."}
                  </p>
                  <span className="font-semibold sm:text-sm lg:text-lg">
                    ₹{item.discountedPrice}
                  </span>

                  {item.discount > 0 ? (
                    <>
                      <span className="text-xs ml-1 line-through text-gray-500 lg:text-sm">
                        ₹{item.price}
                      </span>
                      <span className="text-xs ml-1 text-green-800 lg:text-sm">
                        ({item.discount}%OFF)
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <div className="h-[90vh] lg:mt-40 flex flex-col mt-[20vh] p-8 items-center text-center gap-10">
            <h1 className="font-serif text-3xl rounded-3xl">
              Your Wish List is empty ☹️
            </h1>
            <Link to="/products">
              <button className=" w-[20vh] h-[5vh] bg-blue-600 text-white font-semibold rounded-2xl text-md shadow">
                View Products
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
