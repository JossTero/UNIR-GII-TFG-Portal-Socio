import React from "react";
import arrowRight from "../../assets/img/arrow-right.svg";

function QuestionForm() {
  return (
    <form action="#" method="post">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="crancy-main-form__group mg-top-30">
            <input
              className="crancy-main-form__input"
              type="text"
              name="name"
              placeholder="Fist Name"
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="crancy-main-form__group mg-top-30">
            <input
              className="crancy-main-form__input"
              type="text"
              name="name"
              placeholder="Last Name"
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="crancy-main-form__group mg-top-30">
            <input
              className="crancy-main-form__input"
              type="email"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="crancy-main-form__group mg-top-30">
            <input
              className="crancy-main-form__input"
              type="text"
              name="email"
              placeholder="Subject"
              required="required"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="crancy-main-form__group mg-top-30">
            <textarea
              className="crancy-main-form__input"
              type="text"
              name="message"
              placeholder="Message"
              required="required"
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="crancy-main-form__button mg-top-30 justify-content-end">
            <button className="crancy-btn" type="submit">
              Send Full Form
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default QuestionForm;
