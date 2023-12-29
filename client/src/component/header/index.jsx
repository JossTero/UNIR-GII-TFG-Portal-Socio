import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getImageFromBuffer } from '../../helpers/util';
import { useAssociation } from '../../context/associationContext';
import { getRouteUser } from '../../helpers/navigateRoute';
import Author from './Author';

function Header() {
  const { user, association, getAssociation } = useAssociation();

  useState(() => {
    getAssociation();
  }, [getAssociation]);

  const [subNav, setSubNav] = useState(false);
  useEffect(() => {
    if (subNav) {
      document
        .querySelector('html')
        .addEventListener('click', () => setSubNav(false));
    } else {
      document
        .querySelector('html')
        .removeEventListener('click', () => setSubNav(false));
    }
  }, [subNav]);

  return (
    <header className="crancy-header crancy-close">
      <div className="container g-0">
        <div className="row g-0">
          <div className="col-12">
            {/* <!-- Dashboard Header --> */}
            <div className="crancy-header__inner">
              <div className="crancy-header__middle">
                <div className="crancy-header__left">
                  {/* <!-- Logo --> */}
                  <div className=" logo crancy-sidebar-padding pd-right-0">
                    <Link className="crancy-smenu crancy-logo" to={getRouteUser(user, '/perfil-socio/noticias')}>
                      {/* <!-- Logo for Default --> */}
                      <img
                        className="crancy-logo__main"
                        src={getImageFromBuffer(association?.logo)}
                        alt={`Logo de la asociación ${association?.businessName}`}
                        title={`Logo de la asociación ${association?.businessName}`}
                      />
                    </Link>
                  </div>
                </div>
                <div className="crancy-header__right">
                  <div className="crancy-header__group">
                    <div className="crancy-header__group-two">
                      <div className="crancy-header__right">
                        {/* <!-- Header Zoom --> */}
                        <Author
                          subNav={subNav}
                          setSubNav={setSubNav}
                          title="author"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
