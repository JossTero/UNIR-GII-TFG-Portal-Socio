import React, { useEffect, useRef } from "react";
import LineChart from "../chart/LineChart";
import calendarIcon from "../../assets/img/calendar-icon-3.svg";
import arrowIcon from "../../assets/img/arrow-down.svg";
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sells",
      data: [80, 60, 90, 80, 75, 60, 80],
      borderColor: "#0A82FD",
      borderWidth: 5,
      tension: 0.4,
      fillColor: "#fff",
      fill: "start",
      pointRadius: 3,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      border: { dash: [5, 5] },
      drawBorder: false,
      grid: {
        drawBorder: false,
        color: "#E6F3FF",
        lineWidth: 2,
      },
      suggestedMax: 100,
      suggestedMin: 50,
    },
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
      suggestedMax: 100,
      suggestedMin: 50,
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
      position: "bottom",
      display: false,
    },
    title: {
      display: false,
      text: "Sell History",
    },
  },
};

function RecentAcvitity() {
  const chartRef = useRef(null);
  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(400, 100, 100, 400);
    gradient.addColorStop(0, "rgba(10, 130, 253, 0.19)");
    gradient.addColorStop(1, "rgba(10, 130, 253, 0)");
    return gradient;
  };

  useEffect(() => {
    // // Get canvas context and create gradient
    const ctx = chartRef?.current?.getContext("2d")?.chart.ctx;
    if (ctx) {
      const gradient = createGradient(ctx);
      // Update chart data and options
      chartRef.current.data.datasets[0].backgroundColor = gradient;
      chartRef.current.update();
    }
  }, []);
  return (
    <div className="col-xxl-12 col-lg-4 col-12 mg-top-30">
      {/* <!-- Charts Three --> */}
      <div className="charts-main">
        <div className="charts-main__heading mg-btm-30">
          <h3 className="crancy-sidebar__title m-0">Recent Activity</h3>
          <div className="charts-main-dates">
            <img src={calendarIcon} />
            <input
              id="date-input"
              className="charts-main-dates__input"
              placeholder="23 Jun"
              type="text"
            />
            <img src={arrowIcon} />
          </div>
        </div>
        <div className="charts-main__three">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active "
              id="m_history"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="crancy-chart__inside crancy-chart__activity crancy-chart__activity--v2">
                <LineChart data={data} options={options} refer={chartRef} />
              </div>
            </div>
            {/* <div
              className="tab-pane fade"
              id="m_history"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="crancy-chart__inside crancy-chart__activity crancy-chart__activity--v2">
              <LineChart
                  data={myChart_Three.data}
                  options={myChart_Three.options}
                  refer={chartRef}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- End Charts Three --> */}
    </div>
  );
}

export default RecentAcvitity;
