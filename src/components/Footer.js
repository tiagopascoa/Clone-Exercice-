import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/Footer.css";
import Instagram from "../images/instagram-icon.svg";
import Linkedin from "../images/Linkedin-icon.svg";
import Twitter from "../images/twitter-icon.svg";
import Facebook from "../images/facebook-icon.svg";
import Dribble from "../images/Dribbble-icon.png";

export const Footer = () => {
  return (
    <Container fluid>
      <Row className="footer-row">
        <Col md={8}>
          <div className="footer-sections">
            <div>
              <h3>SECTION 1</h3>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
            </div>
            <div>
              <h3>SECTION 2</h3>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
            </div>
            <div>
              <h3>SECTION 3</h3>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
            </div>
            <div>
              <h3>SECTION 4</h3>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
            </div>
            <div>
              <h3>SECTION 5</h3>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
              <h6>Subsection</h6>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="footer-logo-container">
            <h1 className="footer-this-is-the">THIS IS THE</h1>
            <h1 className="footer-logo">LOGO</h1>
          </div>
        </Col>
        <Col md={12}>
          <div className="footer-info-container">
            <div className="footer-info">
              <p>
                2017. Company. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor .
              </p>
            </div>
            <div className="social-media">
              <div className="me-5">
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className="me-5">
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className="me-5">
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className="me-5">
                <img src={Linkedin} alt="Linkedin" />
              </div>
              <div>
                <img src={Dribble} alt="Dribble" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
