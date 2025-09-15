import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
 
 
// Entrance animation with stagger
const fadeInUpStagger = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductsSection = styled.section`
  padding: 5rem 0;
  /* background: linear-gradient(135deg, #fff8e1, #ffe0b2); */
  border-radius: 30px;
  /* box-shadow: 0 10px 30px rgba(255, 183, 77, 0.3); */
  margin: 3rem auto;
  max-width: 1100px;
  color: #4a2c00;
  

`;

const Title = styled.h2`
  text-align: center;
  color: #ff6f00;
  margin-bottom: 3rem;
  font-weight: 900;
  font-size: 2.5rem;
  font-family: 'Baloo 2', cursive;
`;

const ProductCard = styled(Card)`
  /* background: #e6e6e6; */
  background-color: #f9f9f9;
  border: none;
  border-radius: 25px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 8px 5px gray;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  animation: ${fadeInUpStagger} 0.6s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;

  &:hover {
    transform: translateY(-15px) rotate(1deg) scale(1.05);
    box-shadow: 0 10px 10px black;
  }
`;

const ProductImage = styled(Card.Img)`
  height: 220px;
  object-fit: contain;
  background: #fff;
  padding: 1.5rem;
  border-radius: 25px 25px 0 0;
  transition: transform 0.4s ease;

  ${ProductCard}:hover & {
    transform: scale(1.1) rotate(-2deg);
  }
`;

const ProductBody = styled(Card.Body)`
  padding: 1.8rem 1.5rem 2rem;

`;

const ProductTitle = styled(Card.Title)`
  color: #ff6f00;
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  font-family: 'Baloo 2', cursive;
  
`;

const ProductText = styled(Card.Text)`
  font-size: 1.1rem;
  color: #6d4c00;
  margin-bottom: 1rem;
  min-height: 60px;
`;

const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 900;
  color: #bf360c;
  margin-bottom: 1.5rem;
`;

 
 
 
 
 
export default function Cart() {
  const { orders } = useContext(OrderContext);
 
  return (
    <div>




 <ProductsSection id="Cart">
      <Container>
        <Title id='order-section'>قائمة طلباتي 😋</Title>
<Row className="g-4 text-amber-50">
  {orders.length === 0 ? (
    <Title>
      <p>🛒 السلة فارغة</p>
    </Title>
  ) : (
    <>
      {orders.map((item, index) => (
        <Col md={4} key={item.id}>
          <ProductCard delay={index * 0.3}>
            <ProductImage variant="top" src={item.image} alt={item.name} />
            <ProductBody>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductText className='text-black'>{item.desc}</ProductText>
              <Price>{item.price} × {item.quantity} 
                = {item.total} ريال
              </Price>
            </ProductBody>
          </ProductCard>
        </Col>
      ))}
      <Col xs={12}>
        <Title id='order-section'>  
          <Button className="btn bg-amber-500" variant="danger">مسح السلة</Button> 
        </Title>
      </Col>
    </>
  )}
</Row>
      </Container>
    </ProductsSection>

  



 
    </div>
  );
}
