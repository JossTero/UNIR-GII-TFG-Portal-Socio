import React from "react";

function ForgetPasswordForm() {
  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Reset your password
        </h3>
        <p>
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
      </div>
      <form className="crancy-wc__form-main">
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              type="email"
              name="email"
              placeholder="Type Email"
              required="required"
            />
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <p className="crancy-wc__text">
            <a href="login.html">Return to login</a>
          </p>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group form-group--big">
          <div className="crancy-wc__button crancy-wc__button--center">
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

export default ForgetPasswordForm;
