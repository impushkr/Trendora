import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OfferCrousal from "./components/OfferCrousal.jsx"
import Main from "./components/Main.jsx"
import Products from "./components/Products.jsx"
import ProductsDetails from './components/ProductsDetails.jsx';
import Cart from './components/Cart.jsx'
import WishList from './components/WishList.jsx';
import PaymentPage from './components/PaymentPage.jsx';

import {
  indianWear,
  jewellary,
  womenBags,
  womenBottomwear,
  womenFootwear,
  womenTopWear,
} from "./data/womens/data";
import {
  menBottomWear,
  menFootWear,
  menTopWear,
  watches,
} from "./data/mens/data";

import { kidsData } from "./data/kids/data";
import { summerSale } from "./data/summer/data";


const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
         {
          path:"/",
          element:(
          <>
          <OfferCrousal/>
          <Main/>
          </>)
         },
         {
          path:"/products",
          element:<Products data={summerSale}/>,
         },
         {
          path:"/products/:id",
          element:<ProductsDetails/>
         },
         {
          path:"/jewellery",
          element:<Products data={jewellary}/>,
         },
         {
          path:"/indianwear",
          element:<Products data={indianWear}/>
         },
         {
          path:"/womenBags",
          element:<Products data={womenBags}/>
         },
         {
          path:"/womenBottomwear",
          element:<Products data={womenBottomwear}/>
         },
         {
          path:"/womenFootwear",
          element:<Products data={womenFootwear}/>
         },
         {
          path:"/womenTopWear",
          element:<Products data={womenTopWear}/>
         },
         {
          path:"/menBottomWear",
          element:<Products data={menBottomWear}/>
         },
         {
          path:"/menFootWear",
          element:<Products data={menFootWear}/>
         },
         {
          path:"/menTopWear",
          element:<Products data={menTopWear}/>
         },
         {
          path:"/watches",
          element:<Products data={watches}/>
         },
         {
          path:"/kidsData",
          element:<Products data={kidsData}/>
         },
         {
          path:"/summerSale",
          element:<Products data={summerSale}/>
         },
         {
          path:"/cart",
          element:<Cart/>
         },
         {
          path:"/wishlist",
          element:<WishList/>
         },
         {
          path:"/payment",
          element:<PaymentPage/>
         }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
