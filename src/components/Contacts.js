import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/Contacts.css";
import Detail from "../images/detail02.png";

export const Contacts = () => {
  return (
    <>
      <Container fluid>
        <Row className="contacts-row">
          <Col md={6} className="contacts-col-1">
            <div className="contacts-col-1-container">
              <h1>COLABORATE <br/>WITH US</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>
          </Col>
          <Col md={6} className="contacts-col-2">
            <form>
              <div className="inputs">
                <div className="inputs-col-1">
                  <img className="detail-img" src={Detail} alt="detail"/>
                  <div className="labels-inputs">
                    <label>NAME</label>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="labels-inputs">
                    <label>PHONE</label>
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className="labels-inputs">
                    <label>EXPERIENCE</label>
                    <select name="experience">
                      <option value="">Select</option>
                      <option value="">Senior</option>
                    </select>
                  </div>
                </div>
                <div className="inputs-col-2">
                  <div className="labels-inputs">
                    <label>SURNAME</label>
                    <input type="text" placeholder="Surname" />
                  </div>
                  <div className="labels-inputs">
                    <label>EMAIL ADDRESS</label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="labels-inputs">
                    <label>WHERE DID YOU HEAR ABOUT US?</label>
                    <select name="about us">
                      <option value="">Select</option>
                      <option value="">Linkedin</option>
                    </select>
                  </div>
                  <button className="contacts-send-btn" type="submit">
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
