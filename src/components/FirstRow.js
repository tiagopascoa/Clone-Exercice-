import React from "react";
import "../css/FirstRow.css";
import { Container, Col, Row } from "react-bootstrap";

export const Firstrow = () => {
  const [pageCounter, setPageCounter] = React.useState(1);

  React.useEffect(() => {
    const scrollListener = (e) => {
      setPageCounter(1);

      // [0, 600]
      if (window.pageYOffset >= 400) {
        setPageCounter(2);
      }
      // [600, 1200)
      if (window.pageYOffset >= 900) {
        setPageCounter(3);
      }
      // [1200, 1800)
      if (window.pageYOffset >= 1800) {
        setPageCounter(4);
      }
      // [1800, 2400)
      if (window.pageYOffset >= 2500) {
        setPageCounter(5);
      }
            // [1800, 2400)
            if (window.pageYOffset >= 3700) {
              setPageCounter(6);
            }
                  // [1800, 2400)
      if (window.pageYOffset >= 4500) {
        setPageCounter(7);
      }
    };

    window.addEventListener("scroll", scrollListener, false);

    return () => window.removeEventListener("scroll", scrollListener, false);
  }, [setPageCounter]);

  return (
    <Container fluid>
      <Row className="firstrow">
        <Col md={1} className="counter-col">
          <div className="counter-container">
            <h3 className="counter2">0{pageCounter}</h3>
          </div>
        </Col>
        <Col md={6} className="mx-auto img-col">
          <h1 className="home-title">THE BEST FOODIE EXPERIENCE</h1>
          <h4 className="home-sub-title">NOW IN LONDON</h4>
        </Col>
        <Col md={1} className="request-col">
          <h4 className="request-info">REQUEST INFO</h4>
        </Col>
      </Row>
    </Container>
  );
};
