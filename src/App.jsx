import { Routes,Route } from "react-router-dom"
// import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Homepage"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import ContactUs from "./pages/ContactUs/Contact"
import About from "./pages/About/About"
import NotFound from "./pages/NotFound"
import Login  from  "./pages/Login/Login"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import styled from 'styled-components';
import { useState, useEffect } from "react";
import burger from './assets/burger.gif';
import Register from "./pages/Register/Register"  
import {OrderProvider} from "./context/OrderContext";
import {UserProvider} from "./context/UserContext";
import Navbar from "./components/Navbar/Navbar" 
import EditProfile from "./pages/Editprofile/edit-profile"
import Checkout from "./pages/Checkout/Checkout"
import Routers from "./routers/Routers"
import Layout from "./components/layout/Layout"
 const App = () => {
const Container = styled.div`
  background-color: #000000;
 height: 100vh;

`;

 
 

 const [totalOrders, setTotalOrders] = useState(0);
  

   return (
  <UserProvider>
 <OrderProvider>
  <Container className=" " >
   <Navbar totalOrders={totalOrders}   />
      <Layout/>
     </Container>
     </OrderProvider> 
     </UserProvider>    
   )
 }
 
 export default App
 
