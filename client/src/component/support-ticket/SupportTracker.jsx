import React, { useState } from "react";
import SelectInput from "../form/SelectInput";
import DoughnutChart from "../chart/Doughnut";
const borderColor = document.body.classList.contains("active")
  ? "#222539"
  : "#fff";

const data = {
  labels: [
    "Completed Ticket 1",
    "Completed Ticket 2",
    "Completed Ticket 3",
    "Completed Ticket 4",
    "Completed Ticket 5",
    "Completed Ticket 6",
    "Completed Ticket 7",
    "Completed Ticket 8",
    "Completed Ticket 9",
    "Completed Ticket 10",
    "Completed Ticket 11",
    "Completed Ticket 12",
    "Completed Ticket 13",
    "Completed Ticket 14",
    "Completed Ticket 15",
    "Completed Ticket 16",
    "Completed Ticket 17",
    "Completed Ticket 18",
    "Completed Ticket 19",
    "Completed Ticket 20",
    "Completed Ticket 21",
    "Completed Ticket 22",
    "Completed Ticket 23",
    "Completed Ticket 24",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
      backgroundColor: [
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#54A7FE",
        "#54A7FE",
        "#54A7FE",
        "#84C0FE",
        "#84C0FE",
        "#84C0FE",
        "#B6DAFE",
        "#B6DAFE",
        "#B6DAFE",
        "#E7F3FF",
        "#E7F3FF",
        "#E7F3FF",
        "#F3F9FF",
      ],
      hoverOffset: 0,
      borderWidth: 8,
      borderColor: borderColor,
      hoverBorderColor: "transparent",
    },
  ],
};
const data2 = {
  labels: [
    "Completed Ticket 1",
    "Completed Ticket 2",
    "Completed Ticket 3",
    "Completed Ticket 4",
    "Completed Ticket 5",
    "Completed Ticket 6",
    "Completed Ticket 7",
    "Completed Ticket 8",
    "Completed Ticket 9",
    "Completed Ticket 10",
    "Completed Ticket 11",
    "Completed Ticket 12",
    "Completed Ticket 13",
    "Completed Ticket 14",
    "Completed Ticket 15",
    "Completed Ticket 16",
    "Completed Ticket 17",
    "Completed Ticket 18",
    "Completed Ticket 19",
    "Completed Ticket 20",
    "Completed Ticket 21",
    "Completed Ticket 22",
    "Completed Ticket 23",
    "Completed Ticket 24",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
      backgroundColor: [
        "#54A7FE",
        "#54A7FE",
        "#54A7FE",
        "#84C0FE",
        "#84C0FE",
        "#84C0FE",
        "#B6DAFE",
        "#B6DAFE",
        "#B6DAFE",
        "#E7F3FF",
        "#E7F3FF",
        "#E7F3FF",
        "#F3F9FF",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
        "#0A82FD",
      ],
      hoverOffset: 0,
      borderWidth: 8,
      borderColor: borderColor,
      hoverBorderColor: "transparent",
    },
  ],
};

const options = {
  cutout: 90,
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    tooltip: {
      padding: 10,
      displayColors: true,
      yAlign: "bottom",
      backgroundColor: "#fff",
      titleColor: "#000",
      titleFont: { weight: "normal" },
      bodyColor: "#2F3032",
      cornerRadius: 12,
      boxPadding: 3,
      usePointStyle: true,
      borderWidth: 0,
      font: {
        size: 14,
      },
      caretSize: 9,
      bodySpacing: 100,
    },
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Sell History",
    },
  },
};

function SupportTracker() {
  const [activeChart, setActiveChart] = useState("Complete");
  const handleActiveChart = (e) => {
    setActiveChart(e.target.innerText);
  };
  return (
    <div className="col-12">
      {/* <!-- Chart One --> */}
      <div className="support-tracker-box  mg-top-30">
        <div className="crancy-pcats__list--inner">
          <div
            className="crancy-pcats__list crancy-pcats__list--support list-group "
            id="list-tab"
            role="tablist"
          >
            <a
              className={`list-group-item ${
                activeChart === "Complete" ? "active" : ""
              }`}
              onClick={(e) => handleActiveChart(e)}
            >
              Complete
            </a>
            <a
              className={`list-group-item ${
                activeChart === "Reopen" ? "active" : ""
              }`}
              onClick={(e) => handleActiveChart(e)}
            >
              Reopen
            </a>
          </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="ttab_1"
            role="tabpanel"
            aria-labelledby="ttab_1"
          >
            <div className="charts-main__heading mg-btm-10">
              <h4 className="support-tracker-box__title">Support Tracker</h4>
              <SelectInput
                options={["Last 7 Days", "Last 15 Days", "Last 30 Days"]}
              />
            </div>
            <div className="crancy-chart__inside crancy-chart__five">
              <DoughnutChart
                data={activeChart === "Complete" ? data : data2}
                options={options}
              />

              <span className="crancy-chart__inside--parcent">93%</span>
            </div>
            <h4 className="charts-supporttracker--tittle">Completed Ticket</h4>
            <div className="charts-main__middle mg-top-10">
              <ul className="crancy-progress-list crancy-progress-list__inline">
                <li>
                  <span className="crancy-progress-list__color crancy-color1__bg"></span>
                  <p>
                    <span>Total Ticket</span> <b>:</b> 124k
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTracker;
