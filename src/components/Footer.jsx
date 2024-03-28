import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import ContactImg from "../assets/img/4.jpg";

import "../styles/component.css";

const Footer = () => {
  const buttonHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="wrapper">
      {/* Subscribe Section */}
      <section
        id="subscribe"
        style={{
          backgroundImage: `url(${ContactImg}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          width: "100%",
          height: "100%",
        }}
      >
        <Container>
          <div className="subscribe-content text-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              className="display-5"
            >
              Ready to find the parts you need ?
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Browse our online catalog and place your order today. With our
              wide selection, competitive prices, and fast shipping, you'll have
              your heavy vehicles back on the road in no time.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              onClick={() => buttonHandler("https://wa.me/+6285811482792/")}
            >
              Contact Us
            </button>
          </div>
        </Container>
      </section>

      <section id="footer">
        <Container>
          <Row className="footer-wrapper row-cols-1 row-cols-lg-3 row-cols-md-2 pb-5">
            <Col className="col-lg-7 col-md-8 cv-name d-flex flex-column gap-2 px-0">
              <h1>Nama Cv</h1>
              <p>
                We offer a comprehensive selection of high-quality spare parts,
                sourced from reputable manufacturers, to ensure that your
                trucks, buses, and other heavy vehicles stay on the road and
                performing at their best.
              </p>
            </Col>
            <Col className="col-lg-2 col-md-1 links d-flex flex-column gap-3 px-0">
              <h4>Navigation</h4>
              <Link to="/" reloadDocument>
                Home
              </Link>
              <Link to="/product" reloadDocument>
                Product
              </Link>
              <Link to="/about" reloadDocument>
                About Us
              </Link>
              <Link to="/contact" reloadDocument>
                Contact
              </Link>
            </Col>
            <Col className="col-lg-3 address d-flex flex-column gap-3 px-0">
              <h4>Contact</h4>
              <div className="icon">
              <FontAwesomeIcon icon={faBuilding} />
                <p>North Jakarta, Jakarta</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
                <p>+62887234234</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>cvproject@gmail.com</p>
              </div>
            </Col>
          </Row>
          <div className="copyright">
            <p className="m-0">All copyright reserved ©2024 by Nama CV.</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
