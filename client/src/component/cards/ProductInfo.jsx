import React from "react";
import { Link } from "react-router-dom";

function ProductInfo({ product }) {
  const { link, impression, click, conversation, status, visitors } = product;
  return (
    <tr>
      <td className="crancy-table__column-1 crancy-table__data-1">
        <div className="crancy-table__product--id">
          <p className="crany-table__product--number">
            <Link to="#">{link}</Link>
          </p>
        </div>
      </td>
      <td className="crancy-table__column-2 crancy-table__data-2">
        <p className="crancy-table__text">{impression}</p>
      </td>
      <td className="crancy-table__column-3 crancy-table__data-3">
        <p className="crancy-table__text">{click}</p>
      </td>
      <td className="crancy-table__column-4 crancy-table__data-4">
        <p className="crancy-table__text">{conversation}</p>
      </td>
      <td className="crancy-table__column-5 crancy-table__data-5">
        <div
          className={`crancy-table__status ${
            status < 50 ? "crancy-table__status--down" : ""
          }`}
        >
          <svg
            className={` ${
              status < 50 ? "crancy-color2__fill" : "crancy-color8__fill"
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.4308 3.30786L14.4437 3.30786L10.5548 3.30786L9.56762 3.30786C8.2813 3.30786 7.47984 4.70322 8.12798 5.81431L11.0596 10.8399C11.7027 11.9424 13.2957 11.9424 13.9389 10.8399L16.8705 5.81431C17.5186 4.70322 16.7171 3.30786 15.4308 3.30786Z"></path>
            <path
              opacity="0.4"
              d="M4.16878 15.8335L5.15594 15.8335L9.04483 15.8335L10.032 15.8335C11.3183 15.8335 12.1198 14.4381 11.4716 13.327L8.54002 8.30144C7.89689 7.19893 6.30389 7.19892 5.66076 8.30143L2.72915 13.327C2.08101 14.4381 2.88247 15.8335 4.16878 15.8335Z"
            ></path>
          </svg>
          {status}%
        </div>
      </td>
      <td className="crancy-table__column-6 crancy-table__data-6">
        <div className="crancy-tasksingle__group crancy-tasksingle__group--activity">
          {visitors?.map((visitor, index) =>
            visitors.length === index + 1 ? (
              <Link to="#" key={index + "v"}>
                <span>45k+</span>
                <img src={visitor} alt="author-img" />
              </Link>
            ) : (
              <Link to="#" key={index + "v"}>
                <img src={visitor} alt="author-img" />
              </Link>
            )
          )}
        </div>
      </td>
    </tr>
  );
}

export default ProductInfo;
