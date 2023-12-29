import React, { useState } from "react";
import toggleIcon from "../../assets/img/dot-toggle.svg";
import TaskPreview from "../to-dolist/TaskPreview";

function ToDoCard({ toDo, index }) {
  const [previewTask, setPreviewTask] = useState(false);
  const { id, status, title, day, progress, createdDate } = toDo;
  return (
    <>
      <TaskPreview show={previewTask} handleShow={setPreviewTask} />
      <div
        className={`crancy-single__task  ${
          status === "done"
            ? "crancy-single__task--v3"
            : status === "work-in-progress"
            ? "crancy-single__task--v2"
            : ""
        }  mg-top-20`}
        onClick={() => setPreviewTask(true)}
      >
        {/* <!-- Crancy Task Header --> */}
        <div className="crancy-single__task--header">
          <span className="crancy-single__task--label">Task {index + 1}</span>
          <div
            className="crancy-single__task--toggle"
            data-bs-toggle="modal"
            data-bs-target="#task_detail"
          >
            <img src={toggleIcon} alt="" />
          </div>
        </div>
        {/* <!-- Crancy Task Title --> */}
        <h4 className="crancy-single__task--title">
          <a href="#">{title}</a>
        </h4>
        {/* <!-- Crancy Task Progress --> */}
        <div className="crancy-single__task--progress">
          <p className="crancy-single__task--progress--text crancy-flex__space">
            <span className="crancy-single__task--progress--days  crancy-color4">
              {day}
            </span>
            <span
              className={`crancy-single__task--progress--percent  ${
                status === "done"
                  ? "crancy-color8"
                  : status === "work-in-progress"
                  ? "crancy-color2"
                  : "crancy-color1"
              }`}
            >
              {progress}%
            </span>
          </p>
          <div className="progress crancy-progressbar__single">
            <div
              className={`progress-bar crancy-progressbar__bar  ${
                status === "done"
                  ? "crancy-color8__bg"
                  : status === "work-in-progress"
                  ? "crancy-color2__bg"
                  : "crancy-color1__bg"
              }`}
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        {/* <!-- Crancy Task Footer --> */}
        <div className="crancy-single__task--footer">
          <div
            className={`crancy-single__task--date ${
              status === "done"
                ? "crancy-color13__opacity--bg crancy-color8"
                : status === "work-in-progress"
                ? "crancy-color14__opacity--bg crancy-color2"
                : ""
            } `}
          >
            {createdDate}
          </div>
          <div className="crancy-single__task--icon">
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoCard;
