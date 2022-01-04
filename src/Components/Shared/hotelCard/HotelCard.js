import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./HotelCard.css";
const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const { hotel_name, description, main_image, _id } = hotel;
  return (
    <Col className="single-hotel-card">
      <Card>
        <Card.Img variant="top" src={main_image} className="hotel-card-img" />
        <Card.Body className="text-start">
          <Card.Title className="hotel-name">{hotel_name}</Card.Title>
          <Card.Text>{description.slice(0, 100)}.....</Card.Text>
          <button
            className="btn-regular navbar-book-btn ms-0 py-2"
            onClick={() => {
              navigate(`/hotel/${_id}`);
            }}
          >
            Reserve Now
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HotelCard;
