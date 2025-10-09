//import React from "react";
import { Container,    } from "react-bootstrap";
import styled, { createGlobalStyle,  } from "styled-components";
import Products from "./Products";
import HeroComponent from "./Hero";
import Vision from './Vision';
import Footer from "../Footer";
import AboutUs from "./AboutUs";
// import { OrderProvider } from '../../context/OrderContext';
 
// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

  body {
    font-family: 'Cairo', sans-serif;
    background-color: #121212;
    color: #eee;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
`;

// // Animations
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   } to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// Section wrapper
const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bg || "#121212"};
  color: ${(props) => props.color || "#eee"};
  transition: background-color 0.3s ease, color 0.3s ease;
`;
 


export default function HomePage( ) {
 
  return (
    <div style={{backgroundColor:'black'}}>
      <GlobalStyle />
      <div dir="rtl">
        {/* Hero Section */}
<HeroComponent />
<AboutUs/>
        {/* About Section */}
        <Section id="about-section">
          <Container>
           <Vision/>
          
          </Container>
        </Section> 
        <div id="products" >
  
       <Products    />  
   
  
        </div>
        {/* Contact Section */}
        <Section bg="#121212" color="#eee">
          <Container>
          <Footer/>
          </Container>
        </Section>
      </div>
    </div>
  );
}

 





