import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/img/google-logo.png";
import appleLogo from "../../assets/img/apple-logo.png";
function SignUpForm() {
  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Create your account
        </h3>
      </div>
      {/* <!-- Sign in Form --> */}
      <form className="crancy-wc__form-main">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            {/* <!-- Form Group --> */}
            <div className="form-group">
              <div className="form-group__input">
                <input
                  className="crancy-wc__form-input"
                  type="text"
                  name="first-name"
                  placeholder="First name"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <div className="form-group__input">
                <input
                  className="crancy-wc__form-input"
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                  required="required"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              type="email"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              placeholder="Password"
              id="password-field"
              type="password"
              name="password"
              maxLength="8"
              required="required"
            />
            <span className="crancy-wc__toggle">
              <i className="fas fa-eye" id="toggle-icon"></i>
            </span>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="crancy-wc__check-inline">
            <div className="crancy-wc__checkbox">
              <input
                className="crancy-wc__form-check"
                id="checkbox"
                name="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox">
                By proceeding, you agree to the{" "}
                <a href="#">Terms and Conditions</a>
              </label>
            </div>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top25">
          <div className="crancy-wc__button">
            <button className="ntfmax-wc__btn" type="submit">
              Sign in with email
            </button>
          </div>
          <div className="crancy-wc__form-login--label">
            <span>Or sign up with</span>
          </div>
          <div className="crancy-wc__button--group">
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="submit"
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={googleLogo} />
              </div>
              Google
            </button>
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="submit"
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={appleLogo} />
              </div>
              Apple
            </button>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top30">
          <div className="crancy-wc__bottom">
            <p className="crancy-wc__text">
              Already have an account ? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
