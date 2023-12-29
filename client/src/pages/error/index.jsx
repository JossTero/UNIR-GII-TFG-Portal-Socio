import React from "react";
import img from "../../assets/img/error-img.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="crancy-error">
      <img className="error-img" src={img} alt="page not found" />
      <div className="crancy-error__content">
        <h2 className="crancy-error__title">Oops! Page not found.</h2>
        <Link to="/" className="crancy-btn crancy-btn--error">
          Go Back
        </Link>
      </div>
    </section>
  );
}

export default Error;
