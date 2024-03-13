import { Row, Col, Container } from "react-bootstrap";

import { serviceFeature, testimonial } from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import HeroImg3 from "../assets/img/hero3.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          backgroundImage: `url(${HeroImg3}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          objectFit: "cover",
          width: "100%",
          height: "300px",
          zIndex: "0",
        }}
      >
        <Container className="p-0">
          <div className="hero-content d-flex flex-column align-items-start gap-3">
            <h1
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            >
              One-stop Destination For All Heavy Vehicle
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            >
              Whether you're a fleet manager, a mechanic, or an owner-operator,
              we understand the importance of keeping your heavy vehicles
              running smoothly and efficiently
            </p>
            <Link
              to="/product"
              reloadDocument
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
            >
              Our product
            </Link>
          </div>
        </Container>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contactWrapper">
            <FontAwesomeIcon icon={faPhone} />
            <div className="desc d-flex flex-column gap-1">
              <p>Call</p>
              <h6>+6285823123</h6>
            </div>
          </div>
          <div className="contactWrapper">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="desc d-flex flex-column gap-1">
              <p>Mail</p>
              <h6>newcv@gmail.com</h6>
            </div>
          </div>
          <div className="contactWrapper">
          <FontAwesomeIcon icon={faMapPin} />
            <div className="desc d-flex flex-column gap-1">
              <p>Address</p>
              <h6>North Jakarta, Jakarta</h6>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <Container>
          <Row className="d-flex row-gap-3 row-cols-1 row-cols-lg-2">
            <Col className="about-image">
              <img
                src="https://images.unsplash.com/photo-1584903709597-4c617de30c21?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </Col>
            <Col className="about-content position-relative d-flex flex-column align-items-start gap-3">
              <h1 className="m-0 display-5">
                Our stuff always good conditions
              </h1>
              <p className="desc m-0">
                At Heavy Vehicle Parts Hub, we're dedicated to providing
                top-quality spare parts for heavy vehicles to keep them running
                smoothly on the road. With years of experience in the industry,
                we understand the unique needs of fleet managers, mechanics, and
                owner-operators alike
              </p>
              <Link to="/about" reloadDocument>
                Get to know
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Section */}
      <section id="service">
        <Container className="d-flex flex-column gap-4">
          <Row className="serviceTitle d-flex justify-content-between gap-3">
            <div className="title-right d-flex flex-column align-items-center gap-2">
              {/* <p className="highlight">Our Services</p> */}
              <h1 className="display-5">Why choose Us?</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              hic sit nam excepturi quia placeat quisquam aperiam accusantium
            </p>
          </Row>

          <Row className="cardService-wrapper row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-1">
            {serviceFeature.map((service) => {
              return (
                <Col key={service.id} className="serviceCard p-4">
                  <div className="serviceCard-body text-center">
                    <FontAwesomeIcon icon={service.icon} />
                    <h4>{service.feature}</h4>
                    <p>{service.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Product Offer */}
      <section id="offer">
        <Container>
          <Row className="d-flex justify-content-center align-items-center gap-2">
            <p className="highlight">Offer</p>
            <h1 className="display-5 m-0 p-0">Category Section</h1>
          </Row>
          <Row></Row>
        </Container>
      </section>

      {/* Product Section */}
      {/* <section id="product">
        <Container className="d-flex flex-column gap-5">
          <Row>
            <p className="highlight">Product</p>
            <h1>Product</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates incidunt reprehenderit quas praesentium commodi
            </p>
          </Row>
          <Row className="d-flex flex-column justify-content-center align-items-center gap-4">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper productCard-wrapper"
            >
              {spareParts.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow product-card">
                    <img src={data.image} alt="" />
                    <div className="product-desc">
                      <h5>{data.name}</h5>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="btn-product d-flex justify-content-end align-items-center gap-2">
              <Link to="/product">See more</Link>
            </div>
          </Row>
        </Container>
      </section> */}

      {/* Testimonial */}
      <section id="testimonial">
        <Container fluid className="d-flex flex-column gap-4">
          <Row className="testiTitle d-flex flex-column text-center gap-2">
            {/* <p className="highlight">Testimonials</p> */}
            <h1 className="display-5 fw-normal p-0">Our Costumer Says</h1>
            <p className="p-0">Hear What Our Customer Have to Say About Us</p>
          </Row>
          <Row className="testiCard-wrapper">
            <Swiper
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper testiCard-wrapper"
            >
              {testimonial.map((testi) => {
                return (
                  <SwiperSlide key={testi.id} className="shadow testi-card">
                    <div className="desc d-flex flex-column gap-3">
                      <FontAwesomeIcon icon={faQuoteRight} />
                      <p className="comment">{testi.testimonial}</p>
                    </div>
                    <div className="profile d-flex align-items-center gap-3">
                      <div className="profile-desc">
                        <h5>{testi.name}</h5>
                        <p>{testi.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
