export default function Products({ data }) {
  console.log(data);

  return (
    <>
      <div className="flex flex-wrap justify-center-safe gap-5 mt-5 mb-20 bg-gray-100 pt-5 pb-5 md:mt-25 ">
        {data.map((item) => (
          <div className="hover:scale-105 flex flex-col overflow-hidden shadow rounded-2xl h-70 w-43  lg:h-100 lg:w-70 ">
            <div
              className="overflow-hidden "
              style={{ height: "80%", width: "100%" }}
            >
              <img src={item.imageUrl} alt="Item-Image" />
            </div>

            <div className="pl-2 bg-white lg:ml-3">
              <h4 className="font-medium lg:text-lg">{item.title}</h4>
              <p className="text-sm">{item.subTitle.slice(0, 15) + "..."}</p>
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
        ))}
      </div>
    </>
  );
}
