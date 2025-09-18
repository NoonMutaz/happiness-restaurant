 
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import {Link} from 'react-router';

// Wrapper
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #eee;
  padding: 4rem 0;
`;

// Card Style
const ProfileCard = styled(Card)`
  background: #1e1e1e;
  border: none;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
  text-align: center;
`;

// Avatar Circle
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ffc107;
  color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
`;

// Info
const UserName = styled.h2`
  color: #ffc107;
  font-weight: 700;
`;

const UserEmail = styled.p`
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

// Button
const StyledButton = styled(Button)`
  background-color: #ffc107;
  border: none;
  color: #121212;
  font-weight: 600;
  border-radius: 30px;
  padding: 0.6rem 1.5rem;
  margin: 0.3rem;
  transition: all 0.3s ease;
  text-decoration:none;

  &:hover {
    background-color: #e0a800;
    transform: scale(1.0);
    box-shadow: 0 0 15px #ffc107;
  }
`;

// Section Title
const SectionTitle = styled.h3`
  color: #ffc107;
  margin-bottom: 1rem;
  font-weight: 700;
`;

// Orders List
const OrderCard = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #ddd;
  }
  strong {
    color: #ffc107;
  }
`;

function ProfilePage() {
  const user = {
    name: "أحمد محمد",
    email: "ahmed@example.com",
    orders: [
      { id: 1, item: "برجر السعادة 🍔", price: "25 ريال" },
      { id: 2, item: "بيتزا الفرح 🍕", price: "30 ريال" },
      { id: 3, item: "مشروب كوكتيل 🥤", price: "12 ريال" },
    ],
  };

  return (
    <Wrapper>
      <Container id='ProfilePage'>
        <Row className="justify-content-center mb-5">
          <Col md={6}>
            <ProfileCard>
              <Avatar>{user.name.charAt(0)}</Avatar>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
              <StyledButton>تعديل الملف الشخصي</StyledButton>
          
              <StyledButton as={Link} to="/Login" variant="dark" >تسجيل الخروج</StyledButton>
            </ProfileCard>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <SectionTitle>طلباتي السابقة</SectionTitle>
            {user.orders.map((order) => (
              <OrderCard key={order.id}>
                <span>{order.item}</span>
                <strong>{order.price}</strong>
              </OrderCard>
            ))}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default ProfilePage;
