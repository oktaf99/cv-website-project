import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { spareParts } from "../assets/data";

import BgCommonProduct from "../assets/img/4.jpg";
import Helmet from "../components/UI/Helmet";
import ModalProduct from "../components/Modal/ModalProduct";

import "../styles/productpage.css";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [selectTab, setSelectTab] = useState("all");
  const [dataProduct, setDataProduct] = useState(spareParts);
  const [nextItems, setNextItems] = useState(6);

  useEffect(() => {
    if (selectTab === "all") {
      setDataProduct(spareParts);
    }

    if (selectTab === "gear") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Gear"
      );
      setDataProduct(filteredData);
    }

    if (selectTab === "coupling") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Coupling"
      );
      setDataProduct(filteredData);
    }

    if (selectTab === "brake") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Brake Systems"
      );
      setDataProduct(filteredData);
    }

    if (selectTab === "suspension") {
      const filteredData = spareParts.filter(
        (item) => item.category === "Suspension"
      );
      setDataProduct(filteredData);
    }
  }, [selectTab]);

  // Load more Handler
  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
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
        className="product-title text-center"
        style={{
          backgroundImage: `url(${BgCommonProduct})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "250px",
        }}
      >
        <div className="commonTitle text-center">
          <h1 className="display-3 text-white">Product</h1>
        </div>
      </section>
      {/* Product Card */}
      <section className="product px-lg-0 px-md-3 px-sm-4 px-4">
        <Container className="d-flex flex-column justify-content-center gap-4">
          <Row>
            <div className="category-wrapper d-flex align-items-end justify-content-end">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="px-3 py-2"
                >
                  Sort by Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <button
                    onClick={() => setSelectTab("all")}
                    className={`btn-category ${
                      selectTab === "all" ? "btn-active" : ""
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectTab("gear")}
                    className={`btn-category ${
                      selectTab === "gear" ? "btn-active" : ""
                    }`}
                  >
                    Gear
                  </button>
                  <button
                    onClick={() => setSelectTab("coupling")}
                    className={`btn-category ${
                      selectTab === "coupling" ? "btn-active" : ""
                    }`}
                  >
                    Coupling
                  </button>
                  <button
                    onClick={() => setSelectTab("brake")}
                    className={`btn-category ${
                      selectTab === "brake" ? "btn-active" : ""
                    }`}
                  >
                    Brake
                  </button>
                  <button
                    onClick={() => setSelectTab("suspension")}
                    className={`btn-category ${
                      selectTab === "suspension" ? "btn-active" : ""
                    }`}
                  >
                    Suspension
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
                className="card shadow"
                onClick={() => showModalHandler(parts.id)}
              >
                <div className="productImg">
                  <img src={parts.image} alt="" />
                </div>
                <div className="cardBody">
                  <h5>{parts.name}</h5>
                  <button>Read more</button>
                </div>
              </Col>
            ))}
          </Row>
          <div className="btn-load text-center m-auto">
            {nextItems < dataProduct.length && spareParts.length > 6 && (
              <button onClick={loadMoreHandler} className="btn btn-primary">
                Load more
              </button>
            )}
          </div>
        </Container>
        {showModal && (
          <ModalProduct setShowModal={setShowModal} activeID={activeID} />
        )}
      </section>
    </Helmet>
  );
};

export default Product;
