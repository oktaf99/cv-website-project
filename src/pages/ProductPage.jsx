import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { spareParts } from "../assets/data";

import BgCommonProduct from "../assets/img/4.jpg";
import Helmet from "../components/Helmet";
import ModalProduct from "../components/ModalProduct";
import Faq from "../components/Faq";

import "../styles/productpage.css";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [selectTab, setSelectTab] = useState("All");
  const [dataProduct, setDataProduct] = useState(spareParts);
  const [nextItems, setNextItems] = useState(8);

  useEffect(() => {
    if (selectTab === "All") {
      setDataProduct(spareParts);
    }

    if (selectTab === "Gear") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Gear"
      );
      setDataProduct(filteredData);
    }

    if (selectTab === "Coupling") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Coupling"
      );
      setDataProduct(filteredData);
    }

    if (selectTab === "Automation") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Automation"
      );
      setDataProduct(filteredData);
    }

    if (selectTab === "Motor") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Motor"
      );
      setDataProduct(filteredData);
    }
  }, [selectTab]);

  // Load more Handler
  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 4);
  };

  // Show Modal
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <Helmet title="Product">
      {/* Common Section */}
      <section
        className="commonSection-product text-center"
        style={{
          backgroundImage: `url(${BgCommonProduct})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "250px",
        }}
      >
        <div className="commonTitle text-center">
          <h1 className="display-3 text-white">Our Products</h1>
        </div>
      </section>
      {/* Product Card */}
      <section className="product">
        <Container className="d-flex flex-column justify-content-center gap-3 gap-lg-4">
          <Row>
            <div className="category-wrapper d-flex align-items-start justify-content-start px-0">
              <Dropdown className="d-flex justify-content-between align-items-center w-100">
                <h5>Sort by Category</h5>
                <Dropdown.Toggle id="dropdown-basic" variant="danger">
                  {selectTab}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <button
                    onClick={() => setSelectTab("All")}
                    className={`btn-category ${
                      selectTab === "All" ? "btn-active" : ""
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectTab("Gear")}
                    className={`btn-category ${
                      selectTab === "Gear" ? "btn-active" : ""
                    }`}
                  >
                    Gear
                  </button>
                  <button
                    onClick={() => setSelectTab("Coupling")}
                    className={`btn-category ${
                      selectTab === "Coupling" ? "btn-active" : ""
                    }`}
                  >
                    Coupling
                  </button>
                  <button
                    onClick={() => setSelectTab("Automation")}
                    className={`btn-category ${
                      selectTab === "Automation" ? "btn-active" : ""
                    }`}
                  >
                    Automation
                  </button>
                  <button
                    onClick={() => setSelectTab("Motor")}
                    className={`btn-category ${
                      selectTab === "Motor" ? "btn-active" : ""
                    }`}
                  >
                    Motor
                  </button>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Row>
          <Row className="wrapper">
            {dataProduct?.slice(0, nextItems)?.map((parts, index) => (
              <Col
                key={index}
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card-product shadow-md"
                onClick={() => showModalHandler(parts.id)}
              >
                <div className="productImg overflow-hidden">
                  <img src={parts.image} alt="" />
                </div>
                <div className="cardBody">
                  <h5>{parts.name}</h5>
                  <p>
                    Category : <span>{parts.category}</span>
                  </p>
                  <div className="btn-product">
                    <button onClick={() => showModalHandler(parts.id)}>
                      See more
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="btn-load text-center m-auto mt-4">
            {nextItems < dataProduct.length && spareParts.length > 8 && (
              <button onClick={loadMoreHandler}>Load more</button>
            )}
          </div>
        </Container>
        {showModal && (
          <ModalProduct setShowModal={setShowModal} activeID={activeID} />
        )}
      </section>

      {/* Faq Section */}
      <Faq />
    </Helmet>
  );
};

export default Product;
