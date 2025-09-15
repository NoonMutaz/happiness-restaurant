 import {  Row, Col,  } from "react-bootstrap";
 import styled, { keyframes } from "styled-components";


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
 // Contact box
 const ContactInfoBox = styled.div`
   background: #1e1e1e;
   border-radius: 15px;
   padding: 2rem;
   margin-bottom: 2rem;
   box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
   text-align: center;
   animation: ${fadeInUp} 1.4s ease forwards;
 
   h3 {
     color: #ffc107;
     margin-bottom: 1rem;
     font-weight: 700;
   }
 
   p {
     font-size: 1.1rem;
     margin-bottom: 0.5rem;
     color: #ddd;
   }
 `;
  
  
 // Map container with zoom on hover
 const MapContainer = styled.div`
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
   margin-top: 2rem;
   animation: ${fadeInUp} 1.6s ease forwards;
 
   iframe {
     width: 100%;
     height: 400px;
     border: none;
     transition: transform 0.3s ease;
   }
 
   &:hover iframe {
     transform: scale(1.02);
   }
 `;
 
export default function ContactUs() {
  return (
    <div>
        <h2 className="text-center mb-4" style={{ color: "#ffc107" }}>
              موقعنا
            </h2>
            <Row className="justify-content-center">
              <Col md={10}>
                <ContactInfoBox>
                  <h3>معلومات الاتصال</h3>
                  <p>📍 العنوان: شارع رئيسي، المدينة</p>
                  <p>📞 الهاتف: 123456789</p>
                  <p>✉️ البريد الإلكتروني: info@cafesaadah.com</p>
                </ContactInfoBox>
                <MapContainer>
                  <iframe
                    title="موقع كفتريا السعادة"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1234567890123!2d35.1234567890123!3d31.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA3JzAwLjAiTiAzNcKwMDcnMDMuMCJF!5e0!3m2!1sen!2s!4v0000000000000"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </MapContainer>
              </Col>
            </Row>
    </div>
  )
}
