import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HotelCard from "../../Shared/hotelCard/HotelCard";
import "./Hotels.css";
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={3} className="hotel-cards">
        {hotels.map((hotel) => (
          <HotelCard hotel={hotel} />
        ))}
      </Row>
    </Container>
  );
};

export default Hotels;