import React from "react";
import calenderIcon from "../../assets/img/calendar-icon-3.svg";
import arrowDown from "../../assets/img/arrow-down.svg";
import LineChart from "../chart/LineChart";

const data = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Visitor",
      data: [10, 30, 20, 50, 30, 30, 85, 95],
      backgroundColor: "#304EFA15",
      borderColor: "#304FFD",
      borderWidth: 2,
      fill: true,
      fillColor: "#fff",
    },
    {
      label: "Visitor",
      data: [0, 20, 40, 20, 40, 60, 50, 60],
      backgroundColor: "#F2C94C15",
      borderColor: "#F2C94C",
      borderWidth: 2,
      fill: true,
      fillColor: "#fff",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        drawBorder: false,
        color: "#E7E8EA",
        lineWidth: 1,
      },
      ticks: {
        color: "#9AA2B1",
      },
      suggestedMax: 10,
      suggestedMin: 30,
    },
    y: {
      suggestedMax: 10,
      suggestedMin: 30,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },

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
      text: "Visitor: 2k",
    },
  },
};

function VisitorSource() {
  return (
    <div className="col-lg-5 col-md-6 col-12 crancy-sixth-two">
      {/* <!-- Charts Two --> */}
      <div className="charts-main charts-home-two  mg-top-30">
        <div className="charts-main__heading  mg-btm-20 charts-main__heading--v2">
          <h4 className="charts-main__title">Visitor Source</h4>
          <div className="charts-main-dates">
            <img src={calenderIcon} />
            <input
              id="date-input"
              className="charts-main-dates__input"
              placeholder="23 Jun"
              type="text"
            />
            <img src={arrowDown} />
          </div>
        </div>
        <div className="crancy-chart__inside crancy-chart__two">
          <LineChart options={options} data={data} />
        </div>
      </div>
      {/* <!-- End Charts Two --> */}
    </div>
  );
}

export default VisitorSource;
