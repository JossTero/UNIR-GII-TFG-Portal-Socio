import React from "react";

function TaskGroupWrapper({ children }) {
  return (
    <div className="col-lg-9 col-12">
      <div className="row crancy-to-dolist">{children}</div>
    </div>
  );
}

export default TaskGroupWrapper;
