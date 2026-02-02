import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function RestaurantDetails() {
  const { id, name } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://namastedev.com/api/v1/listRestaurants")
        );

        const dataWrapped = await res.json();
        const json = JSON.parse(dataWrapped.contents);

        const list =
          json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        const found = list.find((r) => r.info.id === id);

        if (!found) throw new Error("Restaurant not found");

        setRestaurant(found.info);
      } catch (err) {
        setError("Failed to load restaurant details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/${restaurant.cloudinaryImageId}`;

  return (
    <Container className="py-5">
      {/* Back */}
      <Link to="/" className="text-decoration-none">
        ← Back to restaurants
      </Link>

      {/* Header */}
      <Card className="mt-3 shadow-lg border-0">
        <Row className="g-0">
          <Col md={5}>
            <img
              src={imageUrl}
              alt={restaurant.name}
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </Col>

          <Col md={7}>
            <Card.Body className="p-4">
              <h2 className="fw-bold">{restaurant.name}</h2>

              <p className="text-muted mb-2">
                {restaurant.cuisines.join(", ")}
              </p>

              <div className="mb-3">
                <Badge bg="success" className="me-2">
                  ⭐ {restaurant.avgRating}
                </Badge>
                <Badge bg="secondary">
                  ⏱️ {restaurant.sla?.deliveryTime} min
                </Badge>
              </div>

              {/* <p className="fw-semibold">
                💰 {restaurant.costForTwo}
              </p> */}

              {restaurant.aggregatedDiscountInfoV3?.header && (
                <div className="alert alert-warning mt-3">
                  {restaurant.aggregatedDiscountInfoV3.header}
                </div>
              )}

              {/* <Button variant="dark" size="lg" className="mt-3">
                Order Now
              </Button> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
