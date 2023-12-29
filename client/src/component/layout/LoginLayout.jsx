import React from 'react';
import { getImageFromBuffer } from '../../helpers/util';
import { Link, Outlet, useLocation } from 'react-router-dom';
import bg from '../../assets/img/credential-bg.svg';
import welcomeImg from '../../assets/img/welcome-vector.png';
import Footer from '../footer';

function LoginLayout({ association, children }) {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment !== '');
  const lastPath =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : null;
  return (
    <div className="body-bg">
      <section
        className="crancy-wc crancy-wc__full crancy-bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="crancy-wc__form">
                {/* <!-- Welcome Banner --> */}
                <div className="crancy-wc__form--middle">
                  <div className="crancy-wc__banner">
                    <div className="crancy-wc__logo">
                      <Link to={'/' + association?.code + '/' + lastPath}>
                        <img
                          src={getImageFromBuffer(association?.logo)}
                          alt={`Imagen de perfil de ${association?.businessName}`}
                          title={`Imagen de perfil de ${association?.businessName}`}
                        />
                      </Link>
                    </div>
                    <img src={welcomeImg} alt="#" />
                  </div>
                  <div className="crancy-wc__form-inner">
                    {/* <!-- Sign in Form --> */}
                    {children}
                    <Outlet />
                    {/* <!-- End Sign in Form --> */}
                  </div>
                </div>
                {/* <!-- End Welcome Banner --> */}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginLayout;
