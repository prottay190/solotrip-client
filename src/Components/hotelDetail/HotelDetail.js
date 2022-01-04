import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./HotelDetail.css";
const HotelDetail = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/hotels/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleHotel(data));
  }, []);
  const {
    hotel_name,
    description,
    heading,
    images,
    location,
    perfect_for,
    perfect_reason,
    popular_facilities,
    price,
    rating,
  } = singleHotel;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Container>
      <h2>{hotel_name}</h2>
    </Container>
  );
};

export default HotelDetail;
