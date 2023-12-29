import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCard({ count, totalSale, progressSettings, name, color }) {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-12 mg-top-30">
      <div className="crancy-progress-card">
        <div className="crancy-progress-card__content">
          <h4 className="crancy-progress-card__title">
            <b className="count-animate">{count}</b>
          </h4>
          <div className="crancy-progress-card__history">
            <span className="crancy-progress-card__percent" style={{ color }}>
              <svg
                //   className="crancy-color1__fill"
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
              {totalSale}
            </span>
            <span>{name}</span>
          </div>
        </div>
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar
            value={progressSettings.value}
            maxValue={progressSettings.maxValue}
            text={`${(
              (progressSettings.value / progressSettings.maxValue) *
              100
            ).toFixed(1)}%`}
            className={progressSettings.className}
            styles={buildStyles({
              ...progressSettings.style,
              textColor: color,
              pathColor: color,
              strokeLinecap: "round",
              textSize: "18px",
              pathTransitionDuration: 0.5,
              rotation: 0.7,
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
