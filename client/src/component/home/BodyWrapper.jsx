import React from "react";

function BodyWrapper({ children }) {
  return (
    <div className="col-xxl-9 col-12 crancy-main__column">
      <div className="crancy-body">
        <div className="crancy-dsinner">{children} </div>
      </div>
    </div>
  );
}

export default BodyWrapper;
