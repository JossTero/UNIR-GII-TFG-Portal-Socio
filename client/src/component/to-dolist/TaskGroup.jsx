import React from "react";
import ToDoCard from "../cards/ToDoCard";

function TaskGroup({ tasks, title, img, addTask }) {
  return (
    <div className="col-lg-4 col-12">
      {/* <!-- Task Group Title --> */}
      <div className="crancy-todolist__task--group">
        <h3 className="crancy-todolist__heading">
          {title}
          <span
            className={`crancy-todolist__badge ${
              tasks[0].status === "done"
                ? "crancy-color8__bg"
                : tasks[0].status === "work-in-progress"
                ? "crancy-color2__bg"
                : "crancy-color1__bg"
            }`}
          >
            {tasks.length}
          </span>
        </h3>
        {img}
      </div>
      {/* <!-- Crancy Single Task --> */}
      {tasks?.map((task, index) => (
        <ToDoCard toDo={task} index={index} key={index + "key"} />
      ))}
      <div
        className="crancy-single__task--new mg-top-20"
        onClick={() => addTask(true)}
      >
        <button
          className="crancy-single__task--addnew"
          data-bs-toggle="modal"
          data-bs-target="#task_modal"
        >
          <svg
            className="crancy-default__fill"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.09396 5.9631C9.57176 5.9631 11.0136 5.9631 12.4541 5.9631C13.484 5.9631 13.9766 6.28865 14.0002 6.98341C14.0238 7.7131 13.5101 8.07732 12.4566 8.07981C11.052 8.08231 9.6462 8.0873 8.24161 8.09353C8.20563 8.09353 8.16841 8.12222 8.06294 8.16588C8.06294 9.35707 8.06294 10.5757 8.06294 11.7956C8.06294 12.1698 8.07659 12.544 8.05921 12.9169C8.02819 13.5942 7.58399 14.0208 6.95862 13.9996C6.35187 13.9784 5.95729 13.5656 5.95233 12.8982C5.94116 11.5474 5.94861 10.1978 5.94861 8.84692C5.94861 8.6224 5.94861 8.39663 5.94861 8.07981C5.58257 8.07981 5.25996 8.07981 4.93859 8.07981C3.76107 8.07981 2.5823 8.08106 1.40478 8.07981C0.505195 8.07732 0.0113549 7.70686 0.000187644 7.03206C-0.0109796 6.34852 0.476657 5.96434 1.36755 5.9631C2.66916 5.96185 3.972 5.96434 5.27361 5.96185C5.47586 5.96185 5.67687 5.94439 5.94736 5.93191C5.94736 4.53117 5.94736 3.16659 5.94736 1.80201C5.94736 1.57375 5.94116 1.34424 5.94861 1.11598C5.97094 0.486084 6.40026 0.0195834 6.96855 -0.000373787C7.55545 -0.020331 8.04805 0.457395 8.05673 1.11848C8.0741 2.5105 8.0617 3.90251 8.06418 5.29453C8.06418 5.4966 8.08155 5.69866 8.09396 5.9631Z" />
          </svg>
          Add New
        </button>
      </div>
      {/* <!-- End Task Add New --> */}
    </div>
  );
}

export default TaskGroup;
