import React from "react";
import toggleIcon from "../../assets/img/toggle-icon.svg";

function IntegrationCard({ integration }) {
  const { img, title, purpose, desc, status } = integration;
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
      <div className="crancy-single-integration mg-top-30">
        <div className="crancy-toggle">
          <a href="#">
            <img src={toggleIcon} alt="" />
          </a>
        </div>
        <div className="crancy-single-integration__head">
          <div className="crancy-single-integration__icon">
            <img src={img} alt="" />
          </div>
          <div className="crancy-single-integration__heading">
            <h4 className="crancy-single-integration__title">{title}</h4>
            <p className="crancy-single-integration__label">{purpose}</p>
          </div>
        </div>
        <div className="crancy-single-integration__content">
          <p>{desc}</p>
          <a
            href="#"
            className={`crancy-btn crancy-btn__regular ${
              status === "Connect" ? "crancy-btn__regular--connect" : ""
            }`}
          >
            {status}
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntegrationCard;
