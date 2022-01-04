import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import emirate from "../../../images/emirates.jpg";
import "./CationCard.css";

const CaptionCard = () => {
  return (
    <>
      <h1 className="text-center cap mb-1">Our Collabs </h1>
      <Container className="mt-3">
        <Row xs={1} md={2} lg={12} className="g-4">
          <Col className="pb-5">
            <Card className="bg-white text-white">
              <Card.Img src={emirate} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text> We Partnered with Emirates Airline</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-white text-warning">
              <Card.Img
                src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2019/10/airbnb-678x381.png"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Text>
                  Also Find Us on Airbnb to get exclusive offers & deals
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CaptionCard;
