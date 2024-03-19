import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from "../assets/data/index";
import "../styles/component.css"

const Faq = () => {
  return (
    <div className="faq py-5">
      <Container className="d-flex flex-column align-items-center gap-4">
        <Row>
          <Col>
            <h1 className="title">FAQ</h1>
          </Col>
        </Row>
        <Row className="faq-content row-cols-lg-2 row-cols-1 row-gap-3">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm">
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
