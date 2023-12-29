import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getRouteUser } from '../../helpers/navigateRoute';

function Logout() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    const deleteSession = async () => {
      await logout();
      return navigate(getRouteUser(user, '/'));
    };
    deleteSession();
  });
  return <></>;
}

export default Logout;
