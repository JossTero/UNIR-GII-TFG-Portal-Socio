import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

function Layout({ children }) {
  return (
    <div id="crancy-dark-light">
      <div className="crancy-body-area ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
