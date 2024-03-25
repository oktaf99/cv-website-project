import React from "react";
import { Col, Container } from "react-bootstrap";

import Helmet from "../components/Helmet";
import Faq from "../components/Faq";
import BgCommonSection from "../assets/img/1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import "../styles/contactpage.css";

const ContactPage = () => {
  return (
    <Helmet title="Contact">
      {/* Common Section */}
      <section
        className="commonSectin-contact text-center"
        style={{
          backgroundImage: `url(${BgCommonSection})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "250px",
        }}
      >
        <div className="commonContact text-center">
          <h1 className="display-3 text-white">Contact</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactPage">
        <Container className="d-flex flex-column justify-content-center align-item-center gap-4 gap-lg-5 p-0">
          <div className="contact-title text-center">
            <h1 className="display-6 m-0">Get in Touch With Us</h1>
          </div>
          <div className="app-wrapper">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone} />
              <h5>Phone Number</h5>
              <a href="">+62 8457348 23</a>
            </div>
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <h5>Email</h5>
              <a href="">cvproject@gmail.com</a>
            </div>
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone} />
              <h5>Instagram</h5>
              <a href="">@cvproject</a>
            </div>
            <div className="contact-icon">
              <FontAwesomeIcon icon={faBuilding} />
              <h5>Address</h5>
              <p>North Jakarta, Jakarta</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Faq Section */}
      <Faq />
    </Helmet>
  );
};

export default ContactPage;
