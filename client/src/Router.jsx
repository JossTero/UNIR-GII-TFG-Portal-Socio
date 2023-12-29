import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAssociationsSimple } from './apis/associationsAPI';
import Layout from './component/layout';
import LoginLayout from './component/layout/LoginLayout';
import { AuthProvider } from './context/authContext';
import { AssociationProvider } from './context/associationContext';
import { PartnerProvider } from './context/partnerContext';
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import ProfileOverview from './pages/profile-overview';
import Activities from './pages/profile-overview/activities';
import Documents from './pages/profile-overview/documents';
import Projects from './pages/profile-overview/projects';
import Users from './pages/user';

function Router() {
  const [associations, setAssociations] = useState([]);

  const associationsList = async () => {
    try {
      const res = await getAssociationsSimple();
      if (res.status !== 'success') {
        setAssociations([]);
      }
      setAssociations(res.associations);
    } catch (error) {
      console.error('Error al obtener asociaciones desde la API: ', error);
      setAssociations([]);
    }
  };

  useEffect(() => {
    associationsList();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AssociationProvider>
          <PartnerProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<LoginLayout />}>
                <Route index path={'/login'} element={<Login />} />
                <Route path={'/logout'} element={<Logout />} />
              </Route>
              {/* Asociaciones */}
              {associations.map((association, index) => (
                <Route key={index}>
                  <Route
                    key={index + 'LoginLayout'}
                    element={<LoginLayout association={association} />}
                  >
                    <Route
                      key={index + '/'}
                      path={'/' + association.code}
                      element={<Home />}
                    />
                    <Route
                      index
                      key={index + '/login'}
                      path={'/' + association.code + '/login'}
                      element={<Login />}
                    />
                    <Route
                      key={index + '/logout'}
                      path={'/' + association.code + '/logout'}
                      element={<Logout />}
                    />
                  </Route>
                  <Route key={index + 'Layout'} element={<Layout />}>
                    <Route
                      key={index + '/perfil-socio'}
                      path={'/' + association.code + '/perfil-socio'}
                      element={<ProfileOverview />}
                    >
                      <Route
                        index
                        key={index + '/noticias'}
                        path={
                          '/' + association.code + '/perfil-socio' + '/noticias'
                        }
                        element={<Projects />}
                      />
                      <Route
                        key={index + '/cuotas'}
                        path={
                          '/' + association.code + '/perfil-socio' + '/cuotas'
                        }
                        element={<Activities />}
                      />
                      <Route
                        key={index + '/documetos'}
                        path={
                          '/' +
                          association.code +
                          '/perfil-socio' +
                          '/documetos'
                        }
                        element={<Documents />}
                      />
                    </Route>
                    <Route
                      key={index + '/asociacion'}
                      path={'/' + association.code + '/asociacion'}
                      element={<Users />}
                    ></Route>
                  </Route>
                </Route>
              ))}
              <Route key={'*'} path="*" element={<Error />} />
            </Routes>
          </PartnerProvider>
        </AssociationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
