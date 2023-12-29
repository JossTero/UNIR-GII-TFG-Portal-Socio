import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCom from "./ChartCom";
function BarChart({ data, options }) {
  return (
    <ChartCom>
      <Bar options={options} data={data} />
    </ChartCom>
  );
}

export default BarChart;
