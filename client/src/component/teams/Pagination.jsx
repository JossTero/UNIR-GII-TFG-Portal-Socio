import React from "react";
import { Link } from "react-router-dom";

function Pagination({ className }) {
  return (
    <div className="row mg-top-30">
      <div
        className={`crancy-pagination ${
          className ? className : "crancy-pagination__v2"
        }`}
      >
        <ul className="crancy-pagination__list">
          <li className="crancy-pagination__button">
            <Link to="#">
              <i className="fas fa-angles-left"></i>
            </Link>
          </li>
          <li className="crancy-pagination__button">
            <Link to="#">
              <i className="fas fa-angle-left"></i>
            </Link>
          </li>
          <li>
            <Link to="#">1</Link>
          </li>
          <li className="active">
            <Link to="#">2</Link>
          </li>
          <li>
            <Link to="#">3</Link>
          </li>
          <li>
            <Link to="#">...</Link>
          </li>
          <li>
            <Link to="#">4</Link>
          </li>
          <li className="crancy-pagination__button">
            <Link to="#">
              <i className="fas fa-angles-right"></i>
            </Link>
          </li>
          <li className="crancy-pagination__button">
            <Link to="#">
              <i className="fas fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
