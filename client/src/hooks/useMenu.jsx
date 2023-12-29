import React, { useEffect } from "react";

function useMenu() {
  useEffect(() => {
    const menu = document
      .getElementsByClassName("crancy-smenu")[0]
      .classList.value.includes("crancy-close");
    if (menu) {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        .classList.add("crancy-close");
    } else {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        .classList.remove("crancy-close");
    }
  }, []);
  return;
}

export default useMenu;
