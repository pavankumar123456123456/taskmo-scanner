import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute2 = ({ children }) => {
  const token = sessionStorage.getItem('user-token');

  const auth = token == 'tokenadded' ? true : false;
  console.log(auth, token, 'test');

  return !auth ? <Outlet /> : <Navigate to="/scanner" />;
};
