import {  Row, Col,  } from "react-bootstrap";
import styled, {  keyframes } from "styled-components";
import tomato from "../../assets/tomato.png";
// import pizza from '../../assets/pizzaW.webp'


// About image with hover zoom
 const AboutImage = styled.img`
   /* border-radius: 20px;
   box-shadow: 0 8px 25px rgba(0,0,0,0.4); */
   transition: transform 0.4s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
 
   &:hover {
     transform: scale(1.05);
   }
 `;
 // Animations
 const fadeInUp = keyframes`
   from {
     opacity: 0;
     transform: translateY(20px);
   } to {
     opacity: 1;
     transform: translateY(0);
   }
 `;
 
 // About text container with subtle border and padding
 const AboutText = styled.div`
   border-left: 3px solid #ffc107;
   padding-left: 2rem;
   animation: ${fadeInUp} 1.2s ease forwards;
 
   p {
     font-size: 1.15rem;
     line-height: 1.8;
     color: #ddd;
   }
 `;
 
export default function Vision() {
  return (
    <div>
       <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                      <AboutImage src={tomato} alt="عن المطعم" className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <AboutText>
                   <h2 style={{ color: "#ffc107", marginBottom: "1rem" }}>رؤيتنا</h2>
  <p>
    نسعى لأن نكون الوجهة المفضلة لعشاق المأكولات السريعة في منطقتنا، من خلال تقديم تجربة
    استثنائية في كل زيارة، تجمع بين الجودة والطعم والخدمة الودية.
  </p>    
  </AboutText>
                    </Col>
                  </Row>
    </div>
  )
}
