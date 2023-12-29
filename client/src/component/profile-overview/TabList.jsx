import React from "react";
import { Link, useLocation } from "react-router-dom";

function TabList() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  const lastPath =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : null;
  return (
    <div className="crancy-pcats__bar">
      <div className="crancy-pcats__list list-group ">
        <Link
          className={`list-group-item ${
            lastPath === "noticias" ? "active" : ""
          }`}
          to="noticias"
        >
          Noticias
        </Link>
        <Link
          className={`list-group-item ${
            lastPath === "cuotas" ? "active" : ""
          }`}
          to="cuotas"
        >
          Cuotas
        </Link>
        <Link
          className={`list-group-item ${
            lastPath === "documetos" ? "active" : ""
          }`}
          to="documetos"
        >
          Documentos
        </Link>
      </div>
    </div>
  );
}

export default TabList;
