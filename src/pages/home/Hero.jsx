import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "./../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";
import "./../../styles/homeStyle.css";

const Hero = ({ id }) => {
  return (
    <section id={id} className="hero-section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mg-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h3 className="h3_lg">$6.99</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
              <Link to="/" className=" btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
