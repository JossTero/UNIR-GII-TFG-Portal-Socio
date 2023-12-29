import React from "react";

function TaskPreview({ show, handleShow }) {
  return (
    <div
      className={`crancy-project__modal crancy-default__modal crancy-task__modal modal fade ${
        show ? "show" : ""
      }`}
      id="task_detail"
      tabIndex="-1"
      aria-labelledby="logoutmodal"
      aria-hidden="true"
      style={{ display: show && "block", background: "rgba(255,255,255,0.5)" }}
      role="dialog"
      onClick={(e) => e.target.attributes.role && handleShow(false)}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content crancy-preview__modal-content">
          <div className="crancy-main-form">
            <div className="row">
              <div className="col-12">
                <div className="crancy-main-form__top">
                  <h4 className="crancy-main-form__title">Project Details</h4>
                  <div
                    className="crancy-main-form__right"
                    onClick={() => handleShow(false)}
                  >
                    <a
                      id="crancy-main-form__close"
                      type="initial"
                      className="crancy-preview__modal--close btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.96538 11.4998C8.84252 11.3642 8.73942 11.243 8.62945 11.1289C5.9368 8.31163 3.24501 5.49253 0.546342 2.68062C0.107304 2.2226 -0.122954 1.71338 0.0660637 1.06407C0.359901 0.0591085 1.48284 -0.323477 2.28531 0.307878C2.42192 0.415649 2.5422 0.546769 2.66335 0.6734C5.31733 3.44669 7.97132 6.22088 10.6227 8.99687C10.7336 9.11272 10.8212 9.25282 10.9501 9.42166C11.1253 9.24743 11.2482 9.13068 11.3651 9.00854C14.0491 6.20292 16.7349 3.39909 19.4147 0.58898C19.8485 0.134548 20.3288 -0.124101 20.956 0.0600065C21.9346 0.347394 22.3212 1.5634 21.6975 2.40222C21.6012 2.53154 21.4844 2.6447 21.3727 2.76055C18.7101 5.54552 16.0467 8.33138 13.3807 11.1128C13.2707 11.2277 13.1264 11.3067 12.9743 11.4208C13.1539 11.622 13.2544 11.7414 13.3618 11.8546C16.0553 14.6719 18.7471 17.4901 21.4449 20.3029C21.8942 20.7717 22.1314 21.2944 21.9269 21.9607C21.6202 22.9576 20.4783 23.3222 19.693 22.6747C19.5702 22.5732 19.4619 22.4511 19.3511 22.3344C16.6876 19.5503 14.0242 16.7653 11.3599 13.9803C11.2499 13.8654 11.1357 13.7558 11.0051 13.6247C10.8788 13.7495 10.7636 13.8564 10.6545 13.9696C7.94812 16.7976 5.24087 19.6212 2.54306 22.4547C2.10918 22.9109 1.61515 23.104 1.02662 22.9325C0.0841064 22.6586 -0.300803 21.4902 0.265392 20.6549C0.37193 20.4978 0.508538 20.3604 0.639133 20.2229C3.30171 17.4371 5.96515 14.653 8.62859 11.868C8.7377 11.754 8.84252 11.6345 8.96538 11.4998Z"
                          fill="#EB5757"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="crancy-main-form__inner">
                  <div className="crancy-project-preview">
                    <p className="crancy-project-preview__task crancy-color1">
                      Task 1
                    </p>
                    <h2 className="crancy-project-preview__heading">
                      Social Experiment Design & Devolapment with best plugin in
                      Wordpress.{" "}
                    </h2>
                    <p className="crancy-project-preview_text">
                      Thie design task is a good way to I am a senior student at
                      King Mongkut's Institute of which is doing a graduation
                      project aboutdesign thinking.
                    </p>
                  </div>
                  <ul className="crancy-project-preview__list">
                    <li>
                      <span>Assign :</span> <b>Empty</b>
                    </li>
                    <li>
                      <span>Status :</span> <b>Empty</b>
                    </li>
                    <li>
                      <span>Status :</span>{" "}
                      <b className="crancy-color4">Empty</b>
                    </li>
                    <li>
                      <span>Create Date :</span>{" "}
                      <b>December 8, 2022, 10:34 PM</b>
                    </li>
                    <li>
                      <span>Due Date :</span>
                      <b>Janury 8, 2023, 10:34 PM</b>
                    </li>
                    <li>
                      <span>Due Date :</span>
                      <b>Janury 8, 2023, 10:34 PM</b>
                    </li>
                  </ul>
                  <div className="crancy-single__task--progress">
                    <p className="crancy-single__task--progress--text crancy-flex__space">
                      <span className="crancy-single__task--progress--days  crancy-color4">
                        08 DAYS
                      </span>
                      <span className="crancy-single__task--progress--percent crancy-color1">
                        78%
                      </span>
                    </p>
                    <div className="progress crancy-progressbar__single">
                      <div
                        className="progress-bar crancy-progressbar__bar crancy-color1__bg"
                        role="progressbar"
                        style={{ width: "78%" }}
                        aria-valuenow="78"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPreview;
