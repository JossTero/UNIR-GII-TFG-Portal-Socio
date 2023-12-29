import React from "react";

function Wrapper({ children }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="crancy-body">
          {/* <!-- Dashboard Inner --> */}
          <div className="crancy-dsinner">
            <div className="crancy-teams crancy-page-inner mg-top-30">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
