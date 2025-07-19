import Nav from "./components/Nav.jsx"
import {Outlet} from "react-router-dom"


export default function App() {
  return (
    <>
      <Nav/>
      <Outlet/>


    </>
  )
}
