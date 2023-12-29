import React from "react";

function AddNewTasks({ show, handleShow }) {
  return (
    <div
      className={`crancy-project__modal crancy-default__modal crancy-task__modal modal fade ${
        show ? "show" : ""
      }`}
      style={{ display: show && "block", background: "rgba(255,255,255,0.5)" }}
      id="task_modal"
      tabIndex="-1"
      aria-labelledby="logoutmodal"
      aria-hidden={!show}
      aria-modal={show}
      role="dialog"
      onClick={(e) => e.target.attributes.role && handleShow(false)}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content crancy-preview__modal-content">
          <div className="crancy-main-form">
            <form action="#" method="post">
              <div className="row">
                <div className="col-12">
                  <div className="crancy-main-form__top">
                    <h4 className="crancy-main-form__title">Add New Task</h4>
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
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="crancy-main-form__group crancy-main-form__group--rmargin">
                          <input
                            className="crancy-main-form__input"
                            type="text"
                            name="name"
                            placeholder="Task Number"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="crancy-main-form__group">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            defaultValue={0}
                          >
                            <option value="0">Status</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Normal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="crancy-main-form__group  crancy-main-form__group--rmargin">
                          <input
                            className="crancy-main-form__input"
                            type="text"
                            name="name"
                            placeholder="Task Deadline"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="crancy-main-form__group">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            defaultValue={0}
                          >
                            <option value="0">Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Normal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="crancy-main-form__group">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={0}
                      >
                        <option value="0">Priority Select</option>
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Normal</option>
                      </select>
                    </div>
                    <div className="crancy-main-form__group">
                      <input
                        className="crancy-main-form__input"
                        type="text"
                        name="subject"
                        placeholder="Task Headline"
                        required="required"
                      />
                    </div>
                    <div className="crancy-main-form__group">
                      <textarea
                        className="crancy-main-form__textarea"
                        type="text"
                        name="subject"
                        placeholder="Task Info"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="crancy-main-form__button">
                      <div className="crancy-main-form__button">
                        <button className="crancy-gbcolor" type="submit">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.95037 13.9996C6.35389 13.9778 5.84216 13.5247 5.79077 12.9295C5.75578 12.5223 5.76999 12.1102 5.76944 11.7003C5.76726 10.5618 5.7689 9.42333 5.7689 8.23184C5.62565 8.23184 5.51904 8.23184 5.41243 8.23184C4.04562 8.23184 2.67826 8.23676 1.31144 8.22965C0.515412 8.22528 -0.0324072 7.67381 0.00148975 6.93596C0.0282793 6.35169 0.476594 5.86143 1.05776 5.78819C1.1928 5.77125 1.33058 5.76961 1.46671 5.76906C2.77886 5.76797 4.09154 5.76852 5.40368 5.76852C5.51084 5.76852 5.61855 5.76852 5.7689 5.76852C5.7689 5.63625 5.7689 5.53077 5.7689 5.42528C5.7689 4.05835 5.76507 2.69141 5.77054 1.32448C5.77382 0.535255 6.29867 -0.0113003 7.02309 0.000177399C7.63159 0.0100154 8.15645 0.464749 8.20893 1.07088C8.24447 1.47806 8.22971 1.89016 8.2308 2.30008C8.23299 3.43855 8.23135 4.57703 8.23135 5.75376C8.35163 5.75922 8.45605 5.76797 8.56048 5.76797C9.93659 5.76906 11.3127 5.7636 12.6888 5.7707C13.4641 5.77453 14.0042 6.29485 13.9999 7.00865C13.996 7.62954 13.534 8.14603 12.9162 8.2149C12.7899 8.22911 12.6615 8.23075 12.5341 8.23075C11.2219 8.23184 9.90925 8.23129 8.59711 8.23129C8.4894 8.23129 8.38225 8.23129 8.23135 8.23129C8.23135 8.36356 8.23135 8.4685 8.23135 8.57398C8.23135 9.94092 8.23572 11.3078 8.22916 12.6748C8.22588 13.4777 7.68736 14.0264 6.95037 13.9996Z"
                              fill="white"
                            />
                          </svg>
                          Add Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTasks;
