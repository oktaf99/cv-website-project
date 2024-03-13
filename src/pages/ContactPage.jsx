import React from "react";
import { Container } from "react-bootstrap";

import Helmet from "../components/UI/Helmet";
import BgCommonSection from "../assets/img/1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import "../styles/contactpage.css";

const ContactPage = () => {
  return (
    <Helmet title="Contact">
       {/* Common Section */}
       <section
        className="commonSection text-center"
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
        <Container>
          
        </Container>
      </section>
    </Helmet>
  );
};

export default ContactPage;
