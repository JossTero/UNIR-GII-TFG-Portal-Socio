import React from "react";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
}

export default Layout;
