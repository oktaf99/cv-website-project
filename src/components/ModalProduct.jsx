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

function CenteredModal(props) {
  // Button Whatsapp
  const buttonHandler = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to Book a Product ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Follow these steps:</h6>
        <ol className="m-0 p-0 d-flex flex-column gap-2">
          <li>
            Find Your Desired Product. Once you've found the product you wish to
            book, click on it to view more details, including specifications,
            pricing, and availability.
          </li>
          <li>Take a screenshot of the selected product</li>
          <li>Click the book button on the product and will direct you to the WhatsApp application</li>
          <li>
            Start a new chat in WhatsApp and address it to our business WhatsApp
            number
          </li>
          <li>
            Attach the screenshot of the product page to your message by tapping
            the attachment icon and selecting the screenshot.
          </li>
          <li>
            Once you've attached the screenshot, you can add any additional
            information or questions you have about the product. When you're
            ready, send the message to us.
          </li>
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
          </SwiperSlide>
        </Swiper>

        <div className="modal-body">
          <h3>{product.name}</h3>
          <p>
            Category : <span>{product.category}</span>
          </p>
          <div className="btn-modal">
            <button onClick={() => setModalBook(true)}>Book</button>
          </div>
        </div>

        <button className="closeBtn" onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <CenteredModal show={ModalBook} onHide={() => setModalBook(false)} />
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
