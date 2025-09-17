import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { Button, Image } from "react-bootstrap";
import styled from "styled-components";

// Keep original Title style
const Title = styled.h2`
  text-align: center;
  color: #ff6f00;
  margin-bottom: 3rem;
  font-weight: 900;
  font-size: 2.5rem;
  font-family: 'Baloo 2', cursive;
  margin-top: 10rem;
`;

// New simple list layout
const Section = styled.section`
  padding: 2rem 0;
  margin: auto;
  min-height: 100vh;
  background-color: white;
  padding: 5rem;
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

const ItemImage = styled(Image)`
  width: 80px;
  height: 80px;
  object-fit: contain;
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-right: 1rem;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h5`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: black;
`;

const ItemDesc = styled.p`
  margin: 0.25rem 0;
  font-size: 0.95rem;
  color: black;
`;

const ItemPrice = styled.p`
  font-weight: bold;
  color: black;
  margin: 0;
`;

const DeleteButton = styled(Button)`
  margin-left: 1rem;
  height: 35px;
  padding: 0 12px;
  font-size: 0.85rem;
`;

export default function Cart() {
  const { orders, clearOrder, removeOrderItem } = useContext(OrderContext);

  return (
    <Section>
      <Title>🛒 قائمة طلباتي</Title>

      {orders.length === 0 ? (
        <p className="text-center text-black">السلة فارغة</p>
      ) : (
        <>
          {orders.map((item) => (
            <ItemRow key={item.uniqueId}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemDesc>{item.desc}</ItemDesc>
                <ItemPrice>
                  {item.price} × {item.quantity} = {item.total} ريال
                </ItemPrice>
              </ItemInfo>
              <DeleteButton variant="outline-danger" onClick={() => removeOrderItem(item.uniqueId)}>
                حذف  
              </DeleteButton>
            </ItemRow>
          ))}

          <div className="text-center mt-4 text-amber-50">
            <Button style={{ color: "white" }} onClick={clearOrder}>
              مسح السلة
            </Button>
          </div>
        </>
      )}
    </Section>
  );
}
