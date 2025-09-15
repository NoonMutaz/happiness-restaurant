// src/components/Auth/RegisterPage.js
 
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Global Styles
// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: #121212;
//     font-family: 'Cairo', sans-serif;
//     color: #eee;
//     height: 100vh;
//   }
// `;

// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Card
const RegisterCard = styled(Card)`
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

function RegisterPage() {
  return (
    <div style={{ paddingTop: "5rem", display: "flex", alignItems: "center", backgroundColor: "#121212",paddingBottom:"4rem", minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={6}>
            <RegisterCard>
              <h2 className="text-center mb-4" style={{ color: "#ffc107" }}>
                إنشاء حساب جديد
              </h2>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>الاسم الكامل</Form.Label>
                  <Form.Control type="text" placeholder="أدخل اسمك الكامل" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>رقم الهاتف</Form.Label>
                  <Form.Control type="text" placeholder="أدخل رقم هاتفك" />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control type="password" placeholder="أدخل كلمة المرور" />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-4">
                  <Form.Label>تأكيد كلمة المرور</Form.Label>
                  <Form.Control type="password" placeholder="أعد إدخال كلمة المرور" />
                </Form.Group>

                <StyledButton type="submit">تسجيل</StyledButton>
              </Form>

              <div className="text-center mt-3">
                <a href="/login" style={{ color: "#ffc107" }}>
                  لديك حساب بالفعل؟ تسجيل الدخول
                </a>
              </div>
            </RegisterCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;
