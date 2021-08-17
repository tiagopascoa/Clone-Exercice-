import React from "react";
import { Container, Col, Row, Card} from "react-bootstrap";
import "../css/Cards.css";
import CardPic1 from "../images/CardPic1.png"
import CardPic2 from "../images/CardPic2.png"
import CardPic3 from "../images/CardPic3.png"
import CardPic4 from "../images/CardPic4.png"
import Arrows from "../images/Arrows.png"

export const Cards = () => {
  return (
    <Container fluid className="fifth-row-container">
      <Row className="fifth-row-1">
        <Col >
          <div className="title-1-container">
            <h2>POPULAR</h2>
            <h1>RECIPES</h1>
            <h4>SEE ALL</h4>
          </div>
        </Col>
        <Col >
          <div className="title-2-container">
            <h1>DO YOU WANT TO SHARE YOUR RECIPE</h1>
            <h4 className="send-it">SEND IT NOW</h4>
          </div>
        </Col>
        </Row>
      <Row className="fifth-row-2">
        <Col >
          <Card className="cards border-0" style={{width: "400px", height: "650px"}}>
            <Card.Img variant="top" src={CardPic1} className="card-img1"/>
            <Card.Body>
              <Card.Text className="difficulty">DIFFICULTY</Card.Text>
              <Card.Title className="card-title">
                CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST
              </Card.Title>
              <Card.Text className="card-text">
                Make a speedy version of romesco sauce with its famous almond
                and red pepper flavours. Serve on sourdough and add broccoli for
                a colourful, veget…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{ width: "18rem" }} className="cards border-0">
            <Card.Img variant="top" src={CardPic2} className="card-img"/>
            <Card.Body>
              <Card.Text className="difficulty">DIFFICULTY</Card.Text>
              <Card.Title>PINEAPPLE FRUIT SALAD WITH FRESH CREAM</Card.Title>
              <Card.Text>
                The pineapple juice is the star of the dressing and what gives
                it such a refreshing and sweet taste. Pineapple juice is kno
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{ width: "18rem" }} className="cards border-0">
            <Card.Img variant="top" src={CardPic3} className="card-img"/>
            <Card.Body>
              <Card.Text className="difficulty">DIFFICULTY</Card.Text>
              <Card.Title>CHEESE, SPINACH & MUSHROOM STUFFED CHI…</Card.Title>
              <Card.Text>
                Amp up this dinner party classic by stuffing three types of
                cheese, spinach and mushroom into the chicken…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="cards border-0">
            <Card.Img variant="top" src={CardPic4} className="card-img"/>
            <Card.Body>
              <Card.Text className="difficulty">DIFFICULTY</Card.Text>
              <Card.Title>FETA AND PEACH COUSCOUS</Card.Title>
              <Card.Text>
                Grab just four ingredients to make this easy, light lunch and
                enjoy a taste of summer. The combination of peaches, feta...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Row>
          <div className="arrows-container">
          <div className="">
            <img src={Arrows} alt="buttons" />
          </div>
          </div>
          
      </Row>
      </Row>
    </Container>
  );
};
