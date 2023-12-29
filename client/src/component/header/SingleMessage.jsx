import React from "react";
import { Link } from "react-router-dom";

function SingleMessage({ img, name, message, time, unread }) {
  return (
    <li>
      <div className="crancy-chatbox__inner">
        <div className="crancy-chatbox__author">
          <div className="crancy-chatbox__author-img">
            <img src={img} alt="#" />
            <span className="crancy-chatbox__author-online"></span>
          </div>
          <div className="crancy-chatbox__author-content">
            <h4 className="crancy-chatbox__author-title">
              <Link to="/inbox">{name}</Link>
            </h4>
            <p className="crancy-chatbox__author-desc">{message}</p>
          </div>
        </div>
        <div className="crancy-chatbox__right">
          <div className="crancy-chatbox__info">
            <p className="crancy-chatbox__time">{time}</p>
            {unread && <span className="crancy-chatbox__unread">{unread}</span>}
          </div>
          <div className="crancy-chatbox__toggle">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle r="2" transform="matrix(1 0 0 -1 2 14)"></circle>
              <circle r="2" transform="matrix(1 0 0 -1 2 8)"></circle>
              <circle r="2" transform="matrix(1 0 0 -1 2 2)"></circle>
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SingleMessage;
