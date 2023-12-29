import React, { useState } from "react";
import Layout from "../../component/home/Layout";
import BreadCrumb from "../../component/home/BreadCrumb";
import Wrapper from "../../component/support-ticket/Wrapper";
import SupportHistoryCard from "../../component/cards/SupportHistoryCard";
import SupportTracker from "../../component/support-ticket/SupportTracker";
import SupportTicketsList from "../../component/support-ticket/SupportTicketsList";
import img from "../../assets/img/faq-img-2.png";
import SupportNowModal from "../../component/support-ticket/SupportNowModal";
import useMenu from "../../hooks/useMenu";

function SupportTicket() {
  const [supportNow, setSupportNow] = useState(false);
  useMenu();
  return (
    <Layout>
      <SupportNowModal
        isOpen={supportNow}
        handleClose={() => setSupportNow(false)}
      />
      <BreadCrumb title="Support Ticket" link="/support-ticket" />
      <Wrapper>
        <div className="row rancy-gap-30">
          <SupportHistoryCard historyPercent={11.5} />
          <SupportHistoryCard historyPercent={55.5} color="pink" />
          <SupportHistoryCard historyPercent={80.5} color="orange" />
          <SupportHistoryCard historyPercent={65} color="red" />
        </div>

        <div className="row crancy-gap-30">
          <div className="col-xxl-3 col-lg-4 col-12">
            <div className="row">
              <div className="col-12">
                <div className="crancy-ticket-card crancy-color1__bg mg-top-30">
                  <h4 className="crancy-ticket-card__title">
                    Create your Ticket
                  </h4>
                  <a
                    href="#"
                    onClick={() => setSupportNow(true)}
                    className="crancy-btn crancy-ybcolor"
                  >
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.54007 10.9151C8.34942 10.9151 8.20328 10.9151 8.05788 10.9151C5.77078 10.9151 3.48369 10.9159 1.19586 10.9135C1.04823 10.9135 0.896896 10.9143 0.753721 10.8818C0.300457 10.7789 -0.00221333 10.381 1.2191e-05 9.91197C0.00223771 9.4437 0.308617 9.04818 0.762623 8.94911C0.905798 8.91815 1.05713 8.92047 1.20476 8.92047C3.49185 8.91893 5.77894 8.9197 8.06678 8.9197C8.21218 8.9197 8.35758 8.9197 8.54007 8.9197C8.54007 8.72852 8.54007 8.57759 8.54007 8.42666C8.54007 5.98855 8.53636 3.55044 8.5423 1.11233C8.54452 0.274086 9.25966 -0.239852 9.91989 0.114641C10.3309 0.335232 10.4562 0.71759 10.4548 1.17967C10.4496 3.59224 10.4525 6.0048 10.4525 8.4166C10.4525 8.56908 10.4525 8.72078 10.4525 8.92047C10.6283 8.92047 10.7723 8.92047 10.9154 8.92047C13.2522 8.92047 15.589 8.91738 17.9258 8.9228C18.7337 8.92434 19.2278 9.65732 18.8947 10.3508C18.6877 10.7827 18.3235 10.9189 17.8806 10.9182C15.5683 10.9135 13.2567 10.9159 10.9444 10.9159C10.7982 10.9159 10.6513 10.9159 10.4525 10.9159C10.4525 11.0916 10.4525 11.2409 10.4525 11.3895C10.4525 13.7634 10.4525 16.1373 10.4525 18.5104C10.4525 18.6265 10.4577 18.7433 10.4488 18.8587C10.4073 19.4283 10.0008 19.8339 9.48295 19.8262C8.98072 19.8184 8.58681 19.4183 8.54452 18.8687C8.53562 18.7534 8.54081 18.6365 8.54081 18.5204C8.54081 16.1597 8.54081 13.799 8.54081 11.4383C8.54007 11.2835 8.54007 11.1303 8.54007 10.9151Z"
                        fill="#2F3032"
                      />
                    </svg>{" "}
                    Support Now
                  </a>
                  <div className="crancy-ticket-card__img">
                    <img src={img} />
                  </div>
                </div>
              </div>

              <SupportTracker />
            </div>
          </div>
          <SupportTicketsList />
        </div>
      </Wrapper>
    </Layout>
  );
}

export default SupportTicket;
