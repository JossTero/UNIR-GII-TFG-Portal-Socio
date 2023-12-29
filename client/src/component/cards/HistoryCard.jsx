import React, { useEffect, useRef } from "react";
import LineChart from "../chart/LineChart";

function HistoryCard({
  title,
  img,
  count,
  color,
  status,
  gradientColor,
  chartData,
  className,
}) {
  const chartRef = useRef(null);

  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, gradientColor[0]);
    gradient.addColorStop(0.5, gradientColor[1]);
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
    <div
      className={` ${
        className ? className : "col-xl-3 col-lg-6 col-md-6 col-12 mg-top-30"
      }`}
    >
      <div className="crancy-history">
        <div className="crancy-history__main crancy-history__main--home">
          <div className="crancy-history__graph">
            <img src={img} />
            <div className="crancy-progress-card__content">
              <h4 className="crancy-progress-card__title">
                <b className="count-animate">{count}</b>
              </h4>
              <div className="crancy-progress-card__history">
                <span
                  className="crancy-progress-card__percent "
                  style={{ color: color }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={color}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.4308 3.30786L14.4437 3.30786L10.5548 3.30786L9.56762 3.30786C8.2813 3.30786 7.47984 4.70322 8.12798 5.81431L11.0596 10.8399C11.7027 11.9424 13.2957 11.9424 13.9389 10.8399L16.8705 5.81431C17.5186 4.70322 16.7171 3.30786 15.4308 3.30786Z" />
                    <path
                      opacity="0.4"
                      d="M4.16878 15.8335L5.15594 15.8335L9.04483 15.8335L10.032 15.8335C11.3183 15.8335 12.1198 14.4381 11.4716 13.327L8.54002 8.30144C7.89689 7.19893 6.30389 7.19892 5.66076 8.30143L2.72915 13.327C2.08101 14.4381 2.88247 15.8335 4.16878 15.8335Z"
                    />
                  </svg>
                  {status}
                </span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="crancy-chart__inside  crancy-chart__homev2">
          <LineChart
            options={chartData.options}
            data={chartData.data}
            refer={chartRef}
          />
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
