import React from "react";

function ConfirmPasswordForm() {
  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Let’s Confirms it’s you!
        </h3>
        <p>Complete verificaton process</p>
      </div>
      {/* <!-- Sign in Form --> */}
      <form className="crancy-wc__form-main crancy-wc__form-main--select mg-top-30">
        <h4 className="crancy-wc__form--inner--heading">
          Select Confirmation method:
        </h4>
        <div
          className="crancy-wc__select--tab nav nav-tabs mg-top-20"
          id="nav-tab"
          role="tablist"
        >
          <a
            className="list-group-item active"
            data-bs-toggle="list"
            href="#confirm-tab-one"
            role="tab"
          >
            System
          </a>
          <a
            className="list-group-item"
            data-bs-toggle="list"
            href="#confirm-tab-two"
            role="tab"
          >
            Google
          </a>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade" id="confirm-tab-one" role="tabpanel">
            <div className="form-group crancy-wp__form--group">
              <input type="checkbox" id="room1" name="room1" value="room" />
              <label className="homec-form-label" htmlFor="room1">
                Get The code by (SMS) at :<span>+1 202 ****0151</span>
              </label>
            </div>
            <div className="form-group crancy-wp__form--group mg-top-20">
              <input type="checkbox" id="room1" name="room1" value="room" />
              <label className="homec-form-label" htmlFor="room1">
                Get the code by email at :<span>Er*****de@gmail.com</span>
              </label>
            </div>
          </div>
          <div
            className="tab-pane fade show active"
            id="confirm-tab-two"
            role="tabpanel"
          >
            <div className="form-group crancy-wp__form--group">
              <input type="checkbox" id="room1" name="room1" value="room" />
              <label className="homec-form-label" htmlFor="room1">
                Get The code by (SMS) at :<span>+1 202 ****0151</span>
              </label>
            </div>
            <div className="form-group crancy-wp__form--group mg-top-20">
              <input type="checkbox" id="room1" name="room1" value="room" />
              <label className="homec-form-label" htmlFor="room1">
                Get the code by email at :<span>Er*****de@gmail.com</span>
              </label>
            </div>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        {/* <!-- Form Group --> */}
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

export default ConfirmPasswordForm;
