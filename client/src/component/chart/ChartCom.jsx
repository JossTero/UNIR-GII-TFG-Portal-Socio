import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
  Filler,
  Title,
  ArcElement,
} from "chart.js";

function ChartCom({ children }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    Filler
  );

  return <>{children}</>;
}

export default ChartCom;
