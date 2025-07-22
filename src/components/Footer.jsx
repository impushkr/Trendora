import{FaInstagram , FaFacebookSquare ,FaGithub , FaLinkedin } from "react-icons/fa"
import { Link } from "react-router"
export default function Footer(){
    return(
        <>
        <div className=" p-10 pl-20 bg-zinc-200 text-zinc-600 w-full">
            <div className="flex flex-wrap gap-10 lg:justify-evenly ">

                <div className="text-sm">
                    <h4 className="text-gray-600 font-bold  mb-4">Men</h4>
                    <ul>
                       <li className="mb-2">
                         <Link to="mentopwear">Men's Topwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="menbottomwear">Men's Bottomwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="menfootwear">Men's Footwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="watches">Men's Watches</Link>
                       </li>
                     </ul>
                </div>

                <div className="text-sm">
                     <h4 className="text-gray-600 font-bold text-sm mb-4">Women</h4>
                     <ul>
                       <li className="mb-2">
                         <Link to="indianwear">Women's Indianwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="womentopwear">Women's Topwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="womenbottomwear">Women's Bottomwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="womenfootwear">Women's Footwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="jewellery">Women's Jewellery</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="womenBags">Women's Bag</Link>
                       </li>
                     </ul>
                </div>

                <div className="text-sm">
                     <h4 className="text-gray-600 font-bold text-sm mb-4">Kids</h4>
                     <ul>
                       <li className="mb-2">
                         <Link to="kidsData">Kid's Topwear</Link>
                       </li>
                       <li className="mb-2">
                         <Link to="kidsData">Kid's Bottomwear</Link>
                       </li>
                     </ul>
                </div>

                <div className="text-sm">
                    <h4 className="text-gray-600 font-bold text-sm mb-4">Follow Us</h4>
                    <ul className="flex gap-2 ">
                      <li>
                        <Link to="#">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaFacebookSquare />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://github.com/impushkr">
                          <FaGithub />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/in/pushkar-singh-2572542b1">
                          <FaLinkedin />
                        </Link>
                      </li>
                    </ul>
                </div>



            </div>

            <div className="flex justify-evenly">
          <h3 className="mt-15 text-center ">
            Built with 💖 by{" "}
            <Link to="https://www.linkedin.com/in/pushkar-singh-2572542b1">
            Pushkar</Link>
          </h3>
          <h3 className="mt-15 text-center">
            &copy; 2025, All rights reserved.
          </h3>
        </div>

        </div>
        
        </>
    )
}