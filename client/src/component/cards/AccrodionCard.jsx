import React from "react";

function AccrodionCard({ title, desc, isOpen, handleOpen, id }) {
  return (
    <div className="accordion-item crancy-accordion__single">
      <h2
        className="accordion-header"
        id="nftac-1"
        onClick={() => handleOpen(isOpen === id ? false : id)}
      >
        <button
          className={`accordion-button crancy-accordion__heading ${
            isOpen === id ? "" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ac-collapseOne"
          aria-expanded="false"
          aria-controls="ac-collapseOne"
        >
          {title}
        </button>
      </h2>
      <div
        id="ac-collapseOne"
        className={`accordion-collapse collapse ${isOpen === id ? "show" : ""}`}
        aria-labelledby="nftac-1"
        data-bs-parent="#crancy-accordion"
      >
        <div className="accordion-body crancy-accordion__body">{desc}</div>
      </div>
    </div>
  );
}

export default AccrodionCard;
