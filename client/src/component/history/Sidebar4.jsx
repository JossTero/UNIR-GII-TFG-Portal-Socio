import React from "react";
import RecentAcvitity from "./RecentAcvitity";
import SidebarMap from "./SidebarMap";
import TaskProcess from "../calendar/TaskProcess";

function Sidebar4() {
  return (
    <div className="col-xxl-4 col-12">
      <div className="crancy-sidebar">
        <div className="row">
          <RecentAcvitity />
          <SidebarMap />
          <div className="col-xxl-12 col-lg-4 col-12 mg-top-30">
            <TaskProcess />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar4;
