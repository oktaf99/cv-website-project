import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { serviceFeature, testimonial } from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Faq from "../components/Faq";
import HeroImg3 from "../assets/img/hero3.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/homepage.css";

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
          width: "100%",
          height: "300px",
          zIndex: "0",
        }}
      >
        <Container className="p-0">
          <div className="hero-content d-flex flex-column justify-content-start align-items-start gap-3 gap-md-3">
            <h1
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              One-stop Destination For All Heavy Vehicle
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              Whether you're a fleet manager, a mechanic, or an owner-operator,
              we understand the importance of keeping your heavy vehicles
              running smoothly and efficiently
            </p>
            <div className="btn-hero d-flex justice-content-center align-items-center gap-lg-4 gap-3">
              <a
                href="#service"
                className="m-0"
                data-aos="fade-right"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
              >
                Our service
              </a>
              <Link
                to="/product"
                reloadDocument
                data-aos="fade-right"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
              >
                View Products
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Box */}
      <section id="contact">
        <div className="container mx-0">
          <div className="contactWrapper">
            <FontAwesomeIcon icon={faPhone} />
            <div className="desc d-flex flex-column gap-1">
              <h6>Phone Number</h6>
              <p>+6285823123</p>
            </div>
          </div>
          <div className="contactWrapper">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="desc d-flex flex-column gap-1">
              <h6>Email</h6>
              <p>newcv@gmail.com</p>
            </div>
          </div>
          <div className="contactWrapper">
            <FontAwesomeIcon icon={faMapPin} />
            <div className="desc d-flex flex-column gap-1">
              <h6>Address</h6>
              <p>North Jakarta, Jakarta</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <Container>
          <Row className="d-flex row-gap-3 row-cols-1 row-cols-lg-2">
            <Col className="about-image text-center">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </Col>
            <Col className="about-content position-relative d-flex flex-column align-items-start justify-content-center gap-2 gap-lg-3 px-0">
              <h1
                className="m-0 display-5"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
              >
                Our stuff always good conditions
              </h1>
              <p
                className="desc m-0"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                we're passionate about providing top-quality spare parts for
                heavy vehicles to keep them running smoothly on the road. With
                years of experience in the industry, we've built a reputation
                for excellence, reliability, and customer satisfaction. We pride
                ourselves on our extensive selection of high-quality parts,
                competitive prices, and fast and reliable shipping.
              </p>
              <Link
                to="/about"
                reloadDocument
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
              >
                Read more
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Section */}
      <section id="service">
        <Container className="d-flex flex-column gap-4">
          <Row className="serviceTitle d-flex justify-content-between gap-2 gap-lg-3">
            <div className="d-flex flex-column align-items-center justify-content-center">
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
                <Col key={service.id} className="serviceCard">
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
            <h1 className="display-5 m-0 p-0">Our Products</h1>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
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

      {/* Testimonial Section*/}
      <section id="testimonial">
        <Container className="d-flex flex-column gap-4 px-0">
          <Row className="testiTitle d-flex flex-column text-center gap-lg-2 gap-2">
            {/* <p className="highlight">Testimonials</p> */}
            <h1 className="display-5 p-0">What Our Client Says</h1>
            <p className="p-0">Hear What Our Client Have to Say About Us</p>
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
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonial.map((testi) => {
                return (
                  <SwiperSlide key={testi.id}>
                    <div className="testi-card shadow-sm">
                      <img src={testi.image} alt="" />
                      <div className="desc d-flex flex-column justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <p className="comment">{testi.testimonial}</p>
                      </div>
                      <div className="profile d-flex align-items-center gap-3">
                        <div className="profile-desc">
                          <h5>{testi.name}</h5>
                          <p>{testi.company}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </section>

      {/* Faq Section */}
      <Faq />
    </div>
  );
};

export default Homepage;
