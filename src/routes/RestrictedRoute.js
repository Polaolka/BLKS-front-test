import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../store/user/selectors';

export const RestrictedRoute = ({ element: Element, redirectTo = '/'}) => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return Element;
  } else {
    return <Navigate to={redirectTo} />;
  }
};