import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { spareParts } from "../assets/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "../styles/component.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ModalProduct = ({ activeID, setShowModal }) => {
  const product = spareParts.find((product) => product.id === activeID);

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
          <SwiperSlide >
            <img src={product.image2} alt="" className="img-detail" />
            <h4>Specification</h4>
          </SwiperSlide>
        </Swiper>

        <div className="modal-body">
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <div className="btn-modal">
            <button
              onClick={() => buttonHandler("https://wa.me/+6285811482792/")}
            >
              Book <FontAwesomeIcon icon={faPhone} />
            </button>
          </div>
        </div>

        <button className="closeBtn" onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
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
