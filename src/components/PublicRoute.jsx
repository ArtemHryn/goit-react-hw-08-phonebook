import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogin } from 'redux/selectors';

export const PublicRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLogin);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
