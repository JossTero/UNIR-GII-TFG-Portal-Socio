import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BreadCrumb({ title, links }) {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment !== '');
  const lastPath =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : null;
  return (
    <div className="row">
      <div className="col-12 mg-top-30">
        <div className="crancy-pbreadcrumb">
          <h4 className="crancy-sidebar__title">{title}</h4>
          <ul className="crancy-pbreadcrumb__list">
            {links.map((link) => (
              <li
                className={link.link.endsWith(lastPath) ? 'active' : ''}
                key={link.link}
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
