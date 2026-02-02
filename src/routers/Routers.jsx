import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home/Homepage"
import Cart from "../pages/Cart/Cart"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"
import ContactUs from "../pages/ContactUs/Contact"
import About from "../pages/About/About"
import NotFound from "../pages/NotFound"
import Login  from  "../pages/Login/Login"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import Register from "../pages/Register/Register"  
import EditProfile from "../pages/Editprofile/edit-profile"
import Checkout from "../pages/Checkout/Checkout"
import MoreRest from '../pages/MoreRest/MoreRest'
export default function Routers() {
  return (
    <div>
      <Routes> 
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/Cart" element={<Cart/>} ></Route>
  <Route path="/PlaceOrder" element={<PlaceOrder/>} ></Route>
  <Route path="/ContactUs" element={<ContactUs/>} ></Route>
  <Route path="/About" element={<About/>} ></Route>
  <Route path="/Login" element={<Login/>} ></Route>
  <Route path="/register" element={<Register/>} ></Route>
  <Route path="/ProfilePage" element={<ProfilePage/>} ></Route>
  <Route path="/edit-profile" element={<EditProfile/>} ></Route>
   <Route path="/more-resturant" element={<MoreRest/>} ></Route>
    <Route path="/Checkout" element={<Checkout/>} ></Route>
  <Route path="*" element={<NotFound/>} ></Route>
</Routes>
    </div>
  )
}
