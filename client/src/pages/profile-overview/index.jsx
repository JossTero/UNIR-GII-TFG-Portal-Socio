import React from 'react';
import Layout from '../../component/home/Layout';
import BreadCrumb from '../../component/home/BreadCrumb';
import { Outlet } from 'react-router-dom';
import Wrapper from '../../component/profile-overview/Wrapper';
import SidebarProfile from '../../component/profile-overview/SidebarProfile';
import TabList from '../../component/profile-overview/TabList';
import { usePartner } from '../../context/partnerContext';
import { getRouteUser } from '../../helpers/navigateRoute';

function ProfileOverview({ children }) {
  const { user } = usePartner();
  return (
    <Layout>
      <BreadCrumb
        title="Perfil de socio"
        links={[
          { title: 'Perfil de socio', link: 'noticias' },
          { title: 'Asociación', link: getRouteUser(user, '/asociacion') },
        ]}
      />
      <Wrapper>
        <div className="crancy-upinner">
          <div className="row">
            <SidebarProfile />
            <div className="col-lg-8 col-12 crancy-upinner__column2">
              <div className="crancy-upcontent mg-top-30">
                <TabList />
                <div className="tab-content" id="nav-tabContent">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default ProfileOverview;
