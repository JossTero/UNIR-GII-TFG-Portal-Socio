import React from "react";
import BarChart from "../chart/BarChart";
import SelectInput from "../form/SelectInput";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "AVG Sale",
      data: [90, 60, 85, 40, 75, 45, 95, 75, 45, 65, 35, 90],
      backgroundColor: [
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
      ],
      hoverBackgroundColor: "#0A82FD",
      fill: true,
      tension: 0.4,
      borderWidth: 0,
      borderSkipped: false,
      borderRadius: 0,
      barPercentage: 0.7,
      categoryPercentage: 0.5,
    },
    {
      label: "Total Sell",
      data: [65, 85, 55, 75, 45, 65, 80, 45, 75, 50, 75, 65],
      backgroundColor: [
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
        "#F2C94C",
        "#E4F2FF",
        "#E4F2FF",
        "#E4F2FF",
      ],
      hoverBackgroundColor: [
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
        "#F2C94C",
      ],
      borderWidth: 0,
      borderSkipped: false,
      borderRadius: 0,
      barPercentage: 0.7,
      categoryPercentage: 0.5,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#9AA2B1",
      },
      grid: {
        display: false,
        drawBorder: false,
        color: "#ffffff2e",
      },
    },
    y: {
      border: { dash: [5, 5] },
      ticks: {
        color: "#9AA2B1",
        callback: function (value, index, values) {
          return (value / 10) * 20 + "%";
        },
      },
      grid: {
        drawBorder: false,
        color: "#E6E6E6",
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
      text: "Sell History",
    },
  },
};
function SaleHistory() {
  return (
    <div className="col-lg-7 col-md-6 col-12 crancy-sixth-one">
      {/* <!-- Charts One --> */}
      <div className="charts-main charts-home-one mg-top-30">
        {/* <!-- Top Heading --> */}
        <div className="charts-main__heading  mg-btm-20">
          <h4 className="charts-main__title">Sell History</h4>
          <div className="charts-main__middle">
            <ul className="crancy-progress-list crancy-progress-list__inline ">
              <li>
                <span className="crancy-progress-list__color "></span>
                <p>
                  <span>Avg: Sell Price</span>
                </p>
              </li>
              <li>
                <span className="crancy-progress-list__color crancy-color9__bg"></span>
                <p>Total Sell</p>
              </li>
            </ul>
          </div>
          {/* <!-- Chart Dropdown Menu --> */}
          <SelectInput
            options={[" Last 7 Days", " Last 15 Days", "Last Month"]}
          />
          {/* <!-- End Chart Dropdown Menu --> */}
        </div>
        <div className="charts-main__one">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="crancy-chart__t1"
              role="tabpanel"
              aria-labelledby="crancy-chart__t1"
            >
              <div className="crancy-chart__inside crancy-chart__one">
                {/* <!-- Chart One --> */}
                <BarChart options={options} data={data} />
                <canvas id="myChart_one"></canvas>
              </div>
            </div>
            <div
              className="tab-pane fade crancy-chart__one"
              id="crancy-chart__t1"
              role="tabpanel"
              aria-labelledby="crancy-chart__t1"
            >
              <div className="crancy-chart__inside crancy-chart__one">
                {/* <!-- Chart One --> */}
                <BarChart options={options} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Charts One --> */}
    </div>
  );
}

export default SaleHistory;
