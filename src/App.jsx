import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import {Outlet} from "react-router-dom"
import { SearchProvider } from "./context/SearchContext.jsx"
import {CartProvider} from "./context/CartContext.jsx"

export default function App() {
  return (
    <>
    <CartProvider>
    <SearchProvider>
      <Nav/>
      <Outlet/>
      <Footer/>
    </SearchProvider>
    </CartProvider>
      
    </>
  )
}
