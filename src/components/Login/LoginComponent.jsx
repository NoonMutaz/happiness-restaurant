// src/components/Auth/LoginPage.js
 
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    font-family: 'Cairo', sans-serif;
    color: #eee;
    height: 100vh;
  }
`;

// Fade In Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Card Styling
const LoginCard = styled(Card)`
  background: #1e1e1e;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
  animation: ${fadeIn} 1s ease forwards;
`;

// Styled Button
const StyledButton = styled(Button)`
  background-color: #ffc107;
  border: none;
  font-weight: bold;
  width: 100%;
  padding: 0.75rem;
  border-radius: 30px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px #ffc107;
  transition: 0.3s ease;

  &:hover {
    background-color: #e0a800;
    box-shadow: 0 0 20px #e0a800;
    transform: scale(1.05);
  }
`;

function LoginPage() {
  return (
    <div style={{   display: "flex", alignItems: "center" ,paddingTop:'4rem'}}>
      <GlobalStyle />
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <LoginCard>
              <h2 className="text-center mb-4" style={{ color: "#ffc107" }}>
                تسجيل الدخول
              </h2>
              <Form>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="أدخل كلمة المرور"
                  />
                </Form.Group>

                <StyledButton type="submit">دخول</StyledButton>
              </Form>

              <div className="text-center mt-3">
                <a href="/register" style={{ color: "#ffc107" }}>
                  ليس لديك حساب؟ سجل الآن
                </a>
              </div>
            </LoginCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
