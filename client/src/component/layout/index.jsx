import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

import { useAssociation } from '../../context/associationContext';

function Layout({ children }) {
  const { association, getAssociation } = useAssociation();

  useState(() => {
    getAssociation();
  }, [getAssociation]);

  return (
    <div id="crancy-dark-light">
      <div className="crancy-body-area ">
        <Header association={association} />
        <Outlet />
        <Footer association={association} />
      </div>
    </div>
  );
}

export default Layout;
