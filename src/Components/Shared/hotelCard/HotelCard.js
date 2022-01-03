import React from "react";
import { Card, Col } from "react-bootstrap";
import "./HotelCard.css";
const HotelCard = (props) => {
  const { hotel } = props;
  return (
    <Col className="single-hotel-card">
      <Card>
        <Card.Img
          variant="top"
          src={hotel.main_image}
          className="hotel-card-img"
        />
        <Card.Body className="text-start">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HotelCard;
