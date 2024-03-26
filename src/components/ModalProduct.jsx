import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { spareParts } from "../assets/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "../styles/component.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to Book a Product via Chat ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Booking a product via WhatsApp from our website is quick and easy.
          Follow these simple steps:
        </p>
        <ol>
          <li>1. Find Your Desired Product</li>
          <li>2. Click on the WhatsApp Button</li>
          <li>3. Initiate the Conversation</li>
          <li>4. Provide Necessary Details</li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => buttonHandler("https://wa.me/+6285811482792/")}>
          Book <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalProduct = ({ activeID, setShowModal }) => {
  const product = spareParts.find((product) => product.id === activeID);
  const [ModalBook, setModalBook] = useState(false);

  // Button Whatsapp
  const buttonHandler = (url) => {
    window.open(url, "_blank");
  };
  //onClick={(e) => setShowModal(false)}
  return (
    <div className="overlay">
      <div className="modal-product">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper modal-image"
        >
          <SwiperSlide>
            <img src={product.image} alt="" className="main-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.image2} alt="" className="img-detail" />
            <h4>Specification</h4>
          </SwiperSlide>
        </Swiper>

        <div className="modal-body">
          <h3>{product.name}</h3>
          <p>
            Category : <span>{product.category}</span>
          </p>
          <div className="btn-modal">
            <button variant="primary" onClick={() => setModalBook(true)}>
              Book
            </button>
            {/* <button
              onClick={() => buttonHandler("https://wa.me/+6285811482792/")}
            >
              Book <FontAwesomeIcon icon={faPhone} />
            </button> */}
          </div>
        </div>

        <button className="closeBtn" onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <MyVerticallyCenteredModal
        show={ModalBook}
        onHide={() => setModalBook(false)}
      />
    </div>
  );
};

export default ModalProduct;

{
  /* <div className="modal-product">
        <div className="modal-image w-100 d-flex justify-content-center align-items-center">
          <img src={product.image} alt="" className="main-img" />
        </div>

        <div className="modal-body py-2 py-lg-4 py-md-4 py-sm-0">
          <h3>{product.name}</h3>
          <p>Specification :</p>
          <img src={product.image2} alt="" className="img-detail" />
          <div className="btn-modal">
            <button
              onClick={() => buttonHandler("https://wa.me/+6285811482792/")}
            >
              Interesting ? <FontAwesomeIcon icon={faPhone} />
            </button>
          </div>
        </div>

        <button className="closeBtn" onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div> */
}

{
  /* <Carousel data-bs-theme="dark" className="modal-image w-100 h-100">
          <Carousel.Item className="text-center">
            <img src={product.image} alt="" className="main-img" />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src={product.image2} alt="" className="img-detail" />
          </Carousel.Item>
        </Carousel> */
}
