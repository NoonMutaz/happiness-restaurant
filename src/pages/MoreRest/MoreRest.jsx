import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
const fadeInUpStagger = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// const Section = styled.section`
//   padding: 4rem 0;
//   max-width: 1200px;
//   margin: auto;
// `;

const Title = styled.h2`
  text-align: center;
  color: #ff6f00;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const RestaurantCard = styled(Card)`
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  animation: ${fadeInUpStagger} 0.5s ease forwards;
  animation-delay: ${(p) => p.delay}s;
  opacity: 0;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Badge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ff6f00;
  color: white;
  padding: 4px 10px;
  border-radius: 14px;
  font-size: 0.8rem;
  font-weight: 700;
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
export default function MoreRest() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://namastedev.com/api/v1/listRestaurants"),
        );
        if (!res.ok) throw new Error("Network error or no resturant available!");

        const dataWrapped = await res.json();
        const json = JSON.parse(dataWrapped.contents);
        const list =json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
?.restaurants || [];

        setRestaurants(list);
      } catch (err) {
        console.error(err);
        setError("Failed to load restaurants.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filtered = restaurants.filter((r) =>
    r.info.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
<div
   
  className="text-decoration-none bg-black w-full"
>
      <ProductsSection className="bg-black h-full w-screen">
        <Container>
          <Title> قائمة المطاعم</Title>

          {/* Search Bar */}
          <Row className="mb-4">
            <Col md={{ span: 6, offset: 3 }}>
              <input
                className="form-control form-control-lg"
                placeholder="ابحث عن مطعم..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>

        {/* Loading Skeleton */}
{loading && (
  <Row className="g-4">
    {[...Array(6)].map((_, i) => (
      <Col md={4} key={i}>
        <div className="card" aria-hidden="true">
          <div
            className="card-img-top"
            style={{ height: "180px", background: "#eee" }}
          ></div>
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
          </div>
        </div>
      </Col>
    ))}
  </Row>
)}

          {/* Error */}
          {error && <p className="text-danger text-center">{error}</p>}
          {/* Restaurants Grid */}
          {!loading && !error && (
            <Row className="g-4">
              {filtered.map((rest, index) => {
                const info = rest.info;
                const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/${info.cloudinaryImageId}`;
                return (
                <Col md={4} key={info.id}>
                  <Link key={info.id}
  to={`/resturant-details/${info.id}/${info.name}`}
  className="text-decoration-none"
>  
                    <RestaurantCard delay={index * 0.1}>
                      {info.aggregatedDiscountInfoV3?.header && (
                        <Badge>{info.aggregatedDiscountInfoV3.header}</Badge>
                      )}
                      <RestaurantImage alt="returant image" src={imageUrl} />
                      <Card.Body>
                        <h5>{info.name}</h5>
                        <p className="text-muted">{info.cuisines.join(", ")}</p>
                        <p>⭐ {info.avgRating}</p>
                        <p>⏱️ {info.sla?.deliveryTime} min</p>
                        <p>💰 {info.costForTwo}</p>
                      </Card.Body>
                    </RestaurantCard>
                 </Link> </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </ProductsSection>
    </div>
  );
}
