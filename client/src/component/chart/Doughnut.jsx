import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartCom from "./ChartCom";
function DoughnutChart({ options, data }) {
  return (
    <ChartCom>
      <Doughnut options={options} data={data} />
    </ChartCom>
  );
}

export default DoughnutChart;
