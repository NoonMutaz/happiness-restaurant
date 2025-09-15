 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { OrderContext } from "../../context/OrderContext";
import { useContext } from "react";

// import NavDropdown from 'react-bootstrap/NavDropdown';

 
 



function NavBar ( ) {

  const { orders } = useContext(OrderContext);
 


  return (

   <Navbar expand="lg" style={{position:'fixed',top:0,zIndex:500,width:'100%'}} className="  bg-dark px-5 gap-3" variant="dark " >
        <Navbar.Brand href="/" style={{color:'yellow '}}    >كفتريا السعادة</Navbar.Brand>
     
        
   <Navbar.Toggle aria-controls="basic-navbar-nav" />    
           <Navbar.Collapse  className="d-flex align-items-center "  id="basic-navbar-nav">
          <Nav  className="ms-auto">
          <Nav.Link  as={HashLink} smooth to="/#home">الرئيسية</Nav.Link>
          <Nav.Link  as={HashLink} smooth to="/ContactUs">اتصل بنا</Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#About">عن المطعم</Nav.Link>
          <Nav.Link href="#orders">الطلبات</Nav.Link>
          <Nav.Link  as={HashLink} smooth to="/#products">العروض</Nav.Link>
          <Nav.Link  as={HashLink} smooth to="#/ProfilePage">الصفحة الشخصية</Nav.Link>
          {/* <h2 style={{display:'flex',flexWrap:'wrap'}}>{".".repeat(90)}</h2> */}
            <Nav.Link href="#orders" style={{display:'none ',width:'20rem',}}>الطلبات</Nav.Link>
        </Nav>


       <div className="d-flex align-items-center me-auto">
         
        </div>
      </Navbar.Collapse>
       <div >
            <Badge pill bg="danger"   >  {orders.length > 9 ? "+9" : orders.length}</Badge>
          <Link as={HashLink}   to="/Cart" ><FaCartShopping   style={{ color: 'yellow' }} className="icon" />
          </Link>  
          </div>
    </Navbar>

  );
}
NavBar.propTypes = {
  totalOrders: PropTypes.number.isRequired,
  handelOrder: PropTypes.func
};

export default NavBar;
 