import React from "react";
import { Link } from "react-router-dom";
import totalProjectImg from "../../assets/img/total-project.png";
import totalTaskImg from "../../assets/img/total-task.png";

function TeamCard({ profile }) {
  const { img, coverImg, name, address, totalProjects, totalTasks } = profile;
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
      {/* <!-- crancy User Profile --> */}
      <div className="crancy-userprofile mg-top-40">
        <div className="crancy-userprofile__header">
          <img src={coverImg} alt="#" />
        </div>
        <div className="crancy-userprofile__user">
          <div className="crancy-userprofile__content">
            <div className="crancy-userprofile__thumb">
              <img src={img} alt="#" />
            </div>
            <div className="crancy-userprofile__info">
              <h4 className="crancy-userprofile__info-title">{name}</h4>
              <div className="crancy-userprofile__location">
                <svg
                  className="crancy-color1__fill"
                  width="14"
                  height="19"
                  viewBox="0 0 14 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.004 0C10.5285 0 13.537 2.68429 13.9466 6.15748C14.1748 8.09221 13.6486 9.85722 12.8068 11.5479C11.4884 14.2009 9.60001 16.4241 7.46388 18.4448C7.16579 18.7267 6.87135 18.7442 6.5893 18.4732C3.98891 15.9878 1.69389 13.2787 0.497187 9.81133C-0.304503 7.48688 -0.18206 5.23091 1.19758 3.12864C1.83067 2.1675 2.6926 1.3785 3.70603 0.832444C4.71946 0.286383 5.85268 0.000345594 7.004 0ZM6.98797 10.8719C7.75518 10.8764 8.50648 10.6533 9.14684 10.231C9.78721 9.80861 10.2879 9.20592 10.5855 8.49913C10.8831 7.79235 10.9643 7.01321 10.8189 6.26028C10.6734 5.50735 10.3078 4.81445 9.76834 4.26922C9.22884 3.72399 8.53969 3.35092 7.78803 3.1972C7.03638 3.04348 6.25599 3.11601 5.54559 3.40563C4.83519 3.69525 4.22668 4.18894 3.79703 4.82425C3.36738 5.45957 3.13588 6.20797 3.13183 6.97479C3.12586 7.48431 3.22108 7.98994 3.41199 8.46242C3.6029 8.93489 3.8857 9.36481 4.24401 9.72728C4.60233 10.0897 5.02904 10.3776 5.49942 10.574C5.9698 10.7705 6.47451 10.8718 6.98432 10.8719H6.98797Z"></path>
                </svg>
                <p className="crancy-userprofile__info-text">{address}</p>
              </div>
              <div className="crancy-achievement">
                <div className="crancy-achievement__single">
                  <img src={totalProjectImg} alt="" />
                  <div className="crancy-achievement__content">
                    <h4 className="crancy-achievement__title">
                      {totalProjects}
                      <span>Total Projects</span>
                    </h4>
                  </div>
                </div>
                <div className="crancy-achievement__single">
                  <img src={totalTaskImg} alt="" />
                  <div className="crancy-achievement__content">
                    <h4 className="crancy-achievement__title">
                      {totalTasks}
                      <span>Total Tasks</span>
                    </h4>
                  </div>
                </div>
              </div>
              <Link className="crancy-achievement__btn" to="/profile-overview">
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.94528 17.7305C5.7614 17.6911 4.06655 17.5198 2.4736 16.8544C1.84327 16.5914 1.24806 16.2052 0.703372 15.7881C0.186948 15.3916 -0.0228753 14.7972 0.00196096 14.1267C0.0721876 12.2031 0.754758 10.5365 2.07451 9.13628C2.45048 8.73718 2.83586 8.69351 3.15188 8.99154C3.45591 9.2793 3.42765 9.69038 3.0611 10.0766C2.1002 11.0906 1.58206 12.299 1.38337 13.6762C1.27889 14.4007 1.5067 14.9274 2.15073 15.2083C2.88639 15.5295 3.64005 15.8558 4.41939 16.0219C6.93214 16.5598 9.43889 16.5015 11.8883 15.6562C12.3619 15.4926 12.7995 15.2066 13.2286 14.9368C13.5334 14.745 13.6525 14.435 13.6302 14.0556C13.5412 12.5705 13.0204 11.2705 12.0176 10.1674C11.9225 10.0629 11.8146 9.96615 11.735 9.85054C11.5191 9.53623 11.5508 9.22363 11.8223 8.96671C12.0955 8.70807 12.4244 8.68922 12.707 8.93844C12.9605 9.16197 13.1857 9.42318 13.3964 9.68953C14.3762 10.9296 14.8755 12.3487 14.9919 13.9211C15.0613 14.8657 14.6811 15.5672 13.9402 16.1101C12.9065 16.8672 11.7118 17.2286 10.4769 17.4376C9.48685 17.6046 8.47969 17.6705 7.94528 17.7305Z" />
                  <path d="M12.2661 4.76517C12.2738 7.38669 10.1336 9.53631 7.51292 9.53888C4.8837 9.5423 2.74093 7.41666 2.72809 4.79429C2.71524 2.1685 4.84516 0.0111706 7.46153 3.71238e-05C10.1156 -0.01024 12.2584 2.11455 12.2661 4.76517ZM4.09322 4.77716C4.09922 6.65958 5.63222 8.18145 7.51549 8.17459C9.39448 8.16774 10.9138 6.62789 10.9026 4.7412C10.8915 2.86563 9.34738 1.35233 7.45897 1.36518C5.60481 1.37802 4.08723 2.91701 4.09322 4.77716Z" />
                </svg>
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
