import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 4rem 2rem;
  background-color: #fff;
  min-height: 100vh;
  max-width: 60rem;
  margin: auto; 

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }

  @media (min-width: 992px) {
    padding: 6rem 6rem;
  }

  @media (min-width: 1200px) {
    padding: 6rem 12rem;
  }
`;
 
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
const Title = styled.h2`
  text-align: center;
  color: #FFD700;
  font-family: 'Baloo 2', cursive;
  font-weight: 900;
  margin-bottom: 3rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const Total = styled.h4`
  text-align: right;
  color: #000;
  margin-top: 2rem;
`;

export default function Checkout() {
  const { orders } = useContext(OrderContext);
  const navigate = useNavigate();  

  const totalAmount = orders.reduce((sum, item) => sum + item.total, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم تأكيد الطلب بنجاح  ");
    
  };
  const goBack = () => {
    navigate(-1); //       
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <Title> إكمال الشراء</Title>

      {orders.map((item) => (
        <OrderItem key={item.uniqueId}>
          <span>{item.name} × {item.quantity}</span>
          <span>{item.total} ريال</span>
        </OrderItem>
      ))}

      <Total>الإجمالي: {totalAmount} ريال</Total>

      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>الاسم</Form.Label>
          <Form.Control type="text" placeholder="أدخل اسمك" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>رقم الجوال</Form.Label>
          <Form.Control type="tel" placeholder="05XXXXXXXX" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ملاحظات (اختياري)</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="أي تعليمات خاصة" />
        </Form.Group>
<ButtonGroup>
          <Button
            type="button"
            onClick={goBack}
            variant="secondary"
            style={{
              backgroundColor: "#ccc",
              color: "#000",
              border: "none",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              flex: 1
            }}
          >
            رجوع
          </Button>

          <Button
          disabled={orders.length === 0}
            type="submit"
            style={{
              backgroundColor: "#000",
              color: "#FFD700",
              border: "none",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              flex: 1
            }}
          >
            تأكيد الطلب
          </Button>
        </ButtonGroup>
      </Form>
    </Container>    </div>
  );
}
