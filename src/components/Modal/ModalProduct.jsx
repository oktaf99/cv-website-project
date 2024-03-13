import React from "react";

import { spareParts } from "../../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./modal.css";

const ModalProduct = ({ activeID, setShowModal }) => {
  const product = spareParts.find((product) => product.id === activeID);

  // Button Whatsapp
  const buttonHandler = (url) => {
    window.open(url, "_blank");
  };
  //  
  return (
    <div className="overlay" onClick={(e) => setShowModal(false)} >
      <div className="modal-product d-flex flex-wrap justify-content-center gap-4">
        <div className="overflow-hidden d-flex justify-content-center align-items-center">
          <img src={product.image} alt="" className="main-img" />
        </div>

        <div className="modal-body py-2 py-lg-4 py-md-4 py-sm-3">
          <h2>{product.name}</h2>
          <p>Specification :</p>
          <img src={product.image2} alt="" className="img-detail"/>
          <button
            onClick={() => buttonHandler("https://wa.me/+6285811482792/")}
            className="btn btn-pirmary rounded"
          >
            Negotiations
          </button>
        </div>

        <button className="closeBtn" onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
