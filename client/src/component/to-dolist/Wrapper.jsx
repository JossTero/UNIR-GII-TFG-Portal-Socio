import React from "react";

function Wrapper({ children }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="crancy-body">
          {/* <!-- Dashboard Inner --> */}
          <div className="crancy-dsinner">
            {/* <!-- Profile Inner Section --> */}
            <div className="crancy-todolist mg-top-30">
              <div className="row">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
