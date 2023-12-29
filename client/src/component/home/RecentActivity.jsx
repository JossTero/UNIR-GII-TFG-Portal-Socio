import React, { useEffect, useRef } from "react";
import calenderIcon from "../../assets/img/calendar-icon-3.svg";
import arrowDown from "../../assets/img/arrow-down.svg";
import LineChart from "../chart/LineChart";
import { myChart_Three } from "../../data/chartSettings";

function RecentActivity() {
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
    <div className="col-lg-6  col-12">
      {/* <!-- Charts Three --> */}
      <div className="charts-main  mg-top-30">
        <div className="charts-main__heading mg-btm-30">
          <h4 className="charts-main__title">Recent Activity</h4>
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
        <div className="charts-main__three">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active "
              id="m_history"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="crancy-chart__inside crancy-chart__activity">
                <LineChart
                  data={myChart_Three.data}
                  options={myChart_Three.options}
                  refer={chartRef}
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="m_history"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="crancy-chart__inside crancy-chart__activity">
                {/* <LineChart
                    data={myChart_Three.data}
                    options={myChart_Three.options}
                    refer={chartRef}
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Charts Three --> */}
    </div>
  );
}

export default RecentActivity;
