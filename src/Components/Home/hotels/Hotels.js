import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HotelCard from "../../Shared/hotelCard/HotelCard";
import "./Hotels.css";
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://fierce-refuge-49185.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <Container className="my-5">
      <div className="hotel-cards-headings">
        <h2>OUR FAVORITE HOTELS</h2>
        <p>Checkout now to get discounts</p>
      </div>
     <div>
     <Row xs={1} md={2} className="g-5 hotel-cards">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </Row>
     </div>
    </Container>
  );
};

export default Hotels;
