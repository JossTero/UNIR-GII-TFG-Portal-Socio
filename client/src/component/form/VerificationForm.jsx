import React from "react";
import editIcon from "../../assets/img/edit-icon.svg";

function VerificationForm() {
  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Email Verificaton
        </h3>
        <p>
          Please enter the 4-digit verification code <br /> that was sent to
          your email
        </p>
      </div>
      {/* <!-- Sign in Form --> */}
      <div className="crancy-wc__form--verification-heading mg-top-20 mg-btm-10">
        <h4 className="crancy-wc__form--inner--heading">
          Send Verification Code to :
        </h4>
        <div className="crancy-wc__form-edit">
          <p>on.......ker@mail.com</p>
          <a href="#">
            <img src={editIcon} alt="" />
          </a>
        </div>
      </div>
      <form className="crancy-wc__form-main">
        <div className="form-group form-mg-top30">
          <ul className="crancy-wc__form-verify">
            <input
              className="crancy-wc__form-input"
              type="text"
              name="text"
              placeholder="9"
              required="required"
            />
            <input
              className="crancy-wc__form-input"
              type="text"
              name="text"
              placeholder="5"
              required="required"
            />
            <input
              className="crancy-wc__form-input"
              type="text"
              name="text"
              placeholder="6"
              required="required"
            />
            <input
              className="crancy-wc__form-input"
              type="text"
              name="text"
              placeholder="9"
              required="required"
            />
          </ul>
        </div>
        <div className="form-group">
          <div className="crancy-wc__button crancy-wc__button--initial">
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--login"
              type="submit"
            >
              Continue
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default VerificationForm;
