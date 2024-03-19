import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Helmet from "../components/Helmet";
import BgCommonSection from "../assets/img/2.jpg";
import aboutImage from "../assets/img/4.jpg";

import "../styles/aboutpage.css";

const About = () => {
  return (
    <Helmet title="about">
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
        <div className="common text-center">
          <h1 className="display-3 text-white">About Us</h1>
        </div>
      </section>

      <section id="aboutPage">
        <Container className="d-flex flex-column justify-content-center align-items-center gap-5">
          <Row className="content-wrapper row-gap-3 row-cols-1 row-cols-lg-2">
            <Col className="d-flex justify-content-center">
              <img src={aboutImage} alt="" />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="m-0 display-5 mb-3">
                Quality Spare Parts for Your Heavy Vehicles
              </h1>
              {/* <p className="m-0">
                We understand the importance of keeping your heavy vehicles
                running smoothly and efficiently. That's why we're proud to
                offer a comprehensive selection of high-quality spare parts for
                trucks, buses, construction equipment, and more. Whether you're
                a fleet manager, a mechanic, or an owner-operator, you can count
                on us to provide the parts you need to keep your vehicles on the
                road and performing at their best.
              </p> */}
              <p className="p-0">
                At Heavy Vehicle Parts Emporium, we're passionate about
                providing top-quality spare parts for heavy vehicles to keep
                them running smoothly on the road. With years of experience in
                the industry, we've built a reputation for excellence,
                reliability, and customer satisfaction. <br /> Our mission is
                simple: to be your trusted partner for all your heavy vehicle
                spare parts needs. Whether you're a fleet manager, a mechanic,
                or an owner-operator, you can count on us to provide the parts
                you need to keep your vehicles on the road and performing at
                their best.
              </p>
            </Col>
          </Row>
          <Row className="content-wrapper row-gap-3 row-cols-1 row-cols-lg-2">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="m-0 display-5 mb-3">
                Our stuff always good conditions
              </h1>
              <p className="desc m-0">
                Your satisfaction is our top priority. We're dedicated to
                providing you with the best products, the best prices, and the
                best service possible. Thank you for choosing us as your trusted
                partner for heavy vehicle spare parts. <br /> We're dedicated to
                providing top-quality spare parts for heavy vehicles to keep
                them running smoothly on the road. With years of experience in
                the industry, we understand the unique needs of fleet managers,
                mechanics, and owner-operators alike.
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
