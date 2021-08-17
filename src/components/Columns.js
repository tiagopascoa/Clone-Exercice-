import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/Columns.css";

export const Columns = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container fluid className="fourthRow">
      <Row>
        <Col md={12} className="fourthRow-title">
          <div className="title-container">
            {/* <span style={{color: "red", textDecoration: "line-through"}}> */}
            <h1 className="our-menu">OUR MENU</h1>
            <h5 className="know-more">KNOW MORE</h5>
          </div>
        </Col>
      </Row>
      <Row className="fourthRow2">
        <Col
          md={2}
          className="col-1"
          style={{
            height: "600px",
            marginTop: "400px",
            transform: `translateY(${-offsetY * 0.2}px)`,
          }}
        >
          <div>
            <h1 className="col-title">STARTERS</h1>
            <div className="col-content-wrapper">
              <div className="col-content-container">
                <h6>QUINOA CROQUETAS</h6>
                <p>
                  Quinoa and cheddar croquettas with aji rocotto & pineapple
                  salsa (v)
                </p>
                <h6 className="price">£4.95</h6>
              </div>
              <div className="col-content-container">
                <h6>CHIFA CHICHARRONES</h6>
                <p>Slow cooked, crispy pork belly with sweet soy sauce</p>
                <h6 className="price">£6.95</h6>
              </div>
              <div className="col-content-container">
                <h6>CALAMARES</h6>
                <p>Crispy baby squid with pickled jalapeño miso salsa</p>
                <h6 className="price">£6.95</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col
          md={2}
          className="col-2"
          style={{
            height: "600px",
            transform: `translateY(${offsetY * 0.125}px)`,
          }}
        >
          <div>
            <h1 className="col-title">MAIN COURSER</h1>
            <div className="col-content-wrapper">
              <div className="col-content-container">
                <h6>EL CLASSICO</h6>
                <p>
                  Sea bass ceviche with aji limo tiger’s milk, sweet potato
                  purée, choclo corn, red onion, coriander & plantain (gf)
                </p>
                <h6 className="price">£8.95</h6>
              </div>
              <div className="col-content-container">
                <h6>TIRADITO CALLAO</h6>
                <p>
                  Sea bass ceviche with aji limo tiger’s milk, sweet potato
                  purée, choclo corn, red onion, coriander & plantain (gf)
                </p>
                <h6 className="price">£8.95</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col
          md={2}
          className="col-3"
          style={{
            height: "600px",
            marginTop: "400px",
            transform: `translateY(${-offsetY * 0.2}px)`,
          }}
        >
          <div>
            <h1 className="col-title">SIDES</h1>
            <div className="col-content-wrapper">
              <div className="col-content-container">
                <h6>SUPER POLLO</h6>
                <p>Marinated corn fed chicken pieces with rocotto salsa</p>
                <h6 className="price">£4.95</h6>
              </div>
              <div className="col-content-container">
                <h6>PATATAS FRITAS</h6>
                <p>Marinated corn fed chicken pieces with rocotto salsa</p>
                <h6 className="price">£3.95</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col
          md={2}
          className="col-4"
          style={{
            height: "600px",
            transform: `translateY(${offsetY * 0.125}px)`,
          }}
        >
          <div>
            <h1 className="col-title">DESSERTS</h1>
            <div className="col-content-wrapper">
              <div className="col-content-container">
                <h6>ICEVREAM</h6>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h6 className="price">£3.95</h6>
              </div>
              <div className="col-content-container">
                <h6>TIRAMISU</h6>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h6 className="price">£3.95</h6>
              </div>
              <div className="col-content-container">
                <h6>CHOCOLATE</h6>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h6 className="price">£3.95</h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  );
};
