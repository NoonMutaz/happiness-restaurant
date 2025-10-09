//import React from "react";
import { Container, Row, Col, Form, Button, } from "react-bootstrap";
import styled, { createGlobalStyle ,keyframes} from "styled-components";
import smoke from '../../assets/smokeBG.jpg';
import Footer from "../../components/Footer";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

  body {
    font-family: 'Cairo', sans-serif;
    background-color: #121212;
    color: #eee;
    margin: 0;
    padding: 0;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${(props) => props.bg || "#fff"};
  color: ${(props) => props.color || "#000"};
  transition: background-color 0.3s ease, color 0.3s ease;

  ${(props) =>
    props.bg === "black" &&
    `
    background-color: #121212;
    color: #eee;
  `}
`;

const Hero = styled.div`
  background: url("${smoke}") center/cover no-repeat;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffc107;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 3rem);
  text-shadow: 0 0 10px rgba(255, 193, 7, 0.8);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  h1 {
    position: relative;
    z-index: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const StyledForm = styled(Form)`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
  animation: ${fadeInUp} 1s ease forwards;
  label {
    font-weight: 700;
    color: #ffc107;
  }

  input,
  textarea {
    background: #eee;
    border: 1px solid #444;
    color: #eee;
    border-radius: 8px;
    padding: 0.6rem 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #ffc107;
      box-shadow: 0 0 8px #ffc107;
      outline: none;
      background: #eee;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #ffc107, #e0a800);
  border: none;
  font-weight: 700;
  padding: 0.6rem 3rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.5);
  transition: all 0.3s ease;
  display: block;
  margin: 1.5rem auto 0;

  &:hover,
  &:focus {
    background: linear-gradient(45deg, #e0a800, #ffc107);
    box-shadow: 0 6px 20px rgba(255, 193, 7, 0.8);
    transform: translateY(-3px);
  }
`;


function ContactUs() {
  return (
    <>
      <GlobalStyle />
      <div dir="rtl">
        {/* Hero Section */}
        <Hero>
          <h1>تواصل معنا</h1>
        </Hero>

        {/* Contact Info Section */}
         

        {/* Contact Form Section */}
        <Section>
          <Container>
            <h2 className="text-center mb-4" style={{ color: "#222" }}>
              أرسل لنا رسالة
            </h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <StyledForm>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>الاسم</Form.Label>
                    <Form.Control type="text" placeholder="ادخل اسمك" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>البريد الإلكتروني</Form.Label>
                    <Form.Control type="email" placeholder="ادخل بريدك الإلكتروني" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>الرسالة</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="اكتب رسالتك هنا" />
                  </Form.Group>

                  <SubmitButton variant="warning" className="text-dark">
                    إرسال
                  </SubmitButton>
                </StyledForm>
              </Col>
            </Row>
          </Container>
        </Section>

        {/* Map / Location Section */}
        <Section bg="black" color="white">
          <Container>
            <Footer />
          </Container>
        </Section>
      </div>
    </>
  );
}

export default ContactUs;