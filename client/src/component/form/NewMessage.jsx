import React from "react";
import boldIcon from "../../assets/img/bold-icon.svg";
import italicIcon from "../../assets/img/italic-icon.svg";
import underlineIcon from "../../assets/img/underline-icon.svg";
import linkIcon from "../../assets/img/link-icon.svg";
import imojiIcon from "../../assets/img/imoji-icon.svg";
import photoIcon from "../../assets/img/photo-icon.svg";
import sendIcon from "../../assets/img/send-icon.svg";

function NewMessage() {
  return (
    <div className="crancy-chatbox__new-message">
      <div className="crancy-chatbox__form">
        <form className="crancy-chatbox__form-inner" action="#">
          <textarea
            name="s"
            type="text"
            placeholder="Type a message..."
          ></textarea>
          <div className="crancy-chatbox__button">
            <div className="crancy-chatbox__button-inline">
              <div className="crancy-chatbox__button-inline__single crancy-chatbox__button-inline__highlights">
                <a href="#">
                  <img src={boldIcon} />
                </a>
                <a href="#">
                  <img src={italicIcon} />
                </a>
                <a href="#">
                  <img src={underlineIcon} />
                </a>
              </div>
              <div className="crancy-chatbox__button-inline__single crancy-chatbox__button-inline__link">
                <a href="#">
                  <img src={linkIcon} />
                </a>
                <a href="#">
                  <img src={imojiIcon} />
                </a>
                <a href="#">
                  <img src={photoIcon} />
                </a>
              </div>
            </div>
            <div className="crancy-chatbox__submit">
              <button className="crancy-chatbox__submit-btn" type="submit">
                <img src={sendIcon} />
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMessage;
