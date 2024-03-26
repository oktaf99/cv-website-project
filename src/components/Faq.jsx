import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from "../assets/data/index";
import "../styles/component.css";

const Faq = () => {
  return (
    <div className="faq">
      <Container className="d-flex flex-column align-items-center gap-3 gap-lg-4">
        <Row>
          <Col className="text-center faq-title position-relative">
            <h1 className="display-5 m-0">FAQ</h1>
          </Col>
        </Row>
        <Row className="faq-content row-cols-lg-2 row-cols-1 row-gap-3">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm p-0">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
