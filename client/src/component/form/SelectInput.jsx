import React, { useState } from "react";
import { Link } from "react-router-dom";

function SelectInput({ options }) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="crancy-chart__dropdown">
      <ul
        className="nav nav-tabs crancy-dropdown__list"
        id="nav-tab"
        role="tablist"
      >
        <li className="nav-item dropdown">
          <Link
            className={`crancy-sidebar_btn crancy-heading__tabs nav-link dropdown-toggle ${
              show ? "show" : ""
            }`}
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            onClick={(e) => {
              setShow(!show);
              e.preventDefault();
            }}
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {selected}
            <span className="crancy-sidebar__arrow--icon">
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.7508 0.247421C11.6711 0.169022 11.5763 0.106794 11.4719 0.0643287C11.3674 0.0218632 11.2554 0 11.1423 0C11.0291 0 10.9171 0.0218632 10.8127 0.0643287C10.7082 0.106794 10.6134 0.169022 10.5338 0.247421L6.6085 4.07837C6.52883 4.15677 6.43404 4.219 6.3296 4.26146C6.22516 4.30393 6.11314 4.32579 6 4.32579C5.88686 4.32579 5.77484 4.30393 5.6704 4.26146C5.56596 4.219 5.47117 4.15677 5.3915 4.07837L1.46623 0.247421C1.38655 0.169022 1.29176 0.106794 1.18732 0.0643287C1.08289 0.0218632 0.970865 0 0.857725 0C0.744585 0 0.632564 0.0218632 0.528125 0.0643287C0.423686 0.106794 0.328896 0.169022 0.249222 0.247421C0.0895969 0.404141 0 0.616141 0 0.837119C0 1.0581 0.0895969 1.2701 0.249222 1.42682L4.18306 5.26613C4.66515 5.73605 5.31865 6 6 6C6.68135 6 7.33485 5.73605 7.81694 5.26613L11.7508 1.42682C11.9104 1.2701 12 1.0581 12 0.837119C12 0.616141 11.9104 0.404141 11.7508 0.247421Z" />
              </svg>
            </span>
          </Link>
          <ul
            className={`dropdown-menu crancy-sidebar_dropdown ${
              show ? "show" : ""
            }`}
            style={{
              position: "absolute",
              inset: "0px auto auto 0px",
              margin: "0px",
              transform: "translate(0px, 28px)",
            }}
          >
            {options?.map((option) => (
              <Link
                className={`list-group-item ${
                  selected === option ? "active" : ""
                }`}
                data-bs-toggle="list"
                data-bs-target="#crancy-chart__t1"
                role="tab"
                onClick={(e) => {
                  setShow(!show);
                  setSelected(option);
                  e.preventDefault();
                }}
                key={option}
              >
                {option}
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SelectInput;
