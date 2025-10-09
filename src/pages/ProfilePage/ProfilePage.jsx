import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { UserContext } from "../../context/UserContext";
import styled from "styled-components";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 
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
  text-decoration: none;

  &:disabled {
    background-color: #ffe240;
    color: black;
    cursor: not-allowed;
  }

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
  const { orders } = useContext(OrderContext);
   const { user,setUser } = useContext(UserContext);

  // const [userdata,setUserdata] = useState({
  //   name:  user.name || "user ",
  //   email: user.email || "user@example.com",
  // });

 
const navigate = useNavigate();

  return (
    <Wrapper>
      <Container id="ProfilePage">
        <Row className="justify-content-center mb-5">
          <Col md={6}>
            <ProfileCard>
              <Avatar>
                {
                  user.name?.trim() ? user.name?.trim().charAt(0).toUpperCase() : 'ض'
                }
                </Avatar>
              <UserName>{
                  user.name?.trim() ? user.name : 'حساب ضيف'}</UserName>
              <UserEmail>{    user.name?.trim() ? user.email : 'guest@example.com'}</UserEmail>
<div>
  
        <StyledButton disabled={!user.name?.trim() } onClick={() => navigate("/edit-profile")} >تعديل الملف الشخصي</StyledButton>
     
      

        <StyledButton as={Link} to="/login">
              {
                user.name?.trim() ? 'تسجيل الخروج' : ' سجل دخولك  انت غير مسجل'
              }

              </StyledButton>
</div>
 

         {/* <UserName>{
                  user.name?.trim() ?  " "  :      
                      <StyledButton as={Link} to="/login">
انت غير مسجل سجل دخولك              </StyledButton>}</UserName>  */}

           
            </ProfileCard>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <SectionTitle>طلباتي السابقة</SectionTitle>

            {orders.length === 0 ? (
              <p style={{ color: "#999" }}>لا توجد طلبات حتى الآن.</p>
            ) : (
              orders.map((order) => (
                <OrderCard key={order.uniqueId}>
                  <span>{order.name} × {order.quantity}</span>
                  <strong>{order.total} ريال</strong>
                </OrderCard>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default ProfilePage;
