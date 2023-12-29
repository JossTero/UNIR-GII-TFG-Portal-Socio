import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getRouteUser } from '../../helpers/navigateRoute';

function Home() {
  const { user } = useAuth();
  return <Navigate to={getRouteUser(user, '/login')} replace />;
}

export default Home;
