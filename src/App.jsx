import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import {Outlet} from "react-router-dom"
import { SearchProvider } from "./context/SearchContext.jsx"

export default function App() {
  return (
    <>
    <SearchProvider>
      <Nav/>
      <Outlet/>
      <Footer/>
    </SearchProvider>
      
    </>
  )
}
