import { Routes,Route } from "react-router-dom"
// import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Homepage"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import ContactUs from "./pages/ContactUs/Contact"
import About from "./pages/About/About"
import NotFound from "./pages/Not-found/Not-found"
import Login  from  "./pages/Login/Login"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import styled from 'styled-components';
import { useState, useEffect } from "react";
import burger from './assets/burger.gif';
import Register from "./pages/Register/Register"  
  import {OrderProvider} from "./context/OrderContext";
import Navbar from "./components/Navbar/Navbar" 
 const App = () => {
const Container = styled.div`
  background-color: #000000;
 height: 100vh;
  /* margin: 0 auto;
  padding: 20px;
  height: 100%; */
`;

 
 

 const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // after 2 seconds, hide spinner
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div 
      className="my-scroll "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
 
        <img style={{height:'8rem',width:'8rem'}} src={burger} />
      </div>
    );

 }

   return (
     
 <OrderProvider>
  <Container className=" " >
   <Navbar totalOrders={totalOrders}   />
<Routes> 
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/Cart" element={<Cart/>} ></Route>
  <Route path="/PlaceOrder" element={<PlaceOrder/>} ></Route>
  <Route path="/ContactUs" element={<ContactUs/>} ></Route>
  <Route path="/About" element={<About/>} ></Route>
  <Route path="/Login" element={<Login/>} ></Route>
  <Route path="/register" element={<Register/>} ></Route>
    <Route path="/ProfilePage" element={<ProfilePage/>} ></Route>
  <Route path="*" element={<NotFound />} ></Route> 
</Routes>
  
     </Container>
     </OrderProvider> 
   )
 }
 
 export default App
 
