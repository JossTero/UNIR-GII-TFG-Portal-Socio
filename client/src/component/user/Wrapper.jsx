import React from "react";

function Wrapper({ children }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="crancy-body">
          <div className="crancy-dsinner">
            <div className="row mg-top-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
