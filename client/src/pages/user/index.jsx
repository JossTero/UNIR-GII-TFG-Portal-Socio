import React from 'react';
import { useAssociation } from '../../context/associationContext';
import { getRouteUser } from '../../helpers/navigateRoute';
import Layout from '../../component/home/Layout';
import BreadCrumb from '../../component/home/BreadCrumb';
import Wrapper from '../../component/user/Wrapper';
import UsersCom from '../../component/user/UsersCom';
import Sidebar3 from '../../component/user/Sidebar3';


function Users() {
  const { user } = useAssociation();
  return (
    <Layout>
      <BreadCrumb
        title="Asociación"
        links={[
          { title: 'Perfil de socio', link: getRouteUser(user, '/perfil-socio/noticias') },
          { title: 'Asociación', link: getRouteUser(user, '/asociacion') },
        ]}
      />
      <Wrapper>
        <Sidebar3 />
        <div className="col-lg-9 col-12">
          <UsersCom />
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Users;
