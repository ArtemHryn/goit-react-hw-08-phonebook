import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Registration, LoginForm } from 'pages/';
import { useEffect } from 'react';
import { fetchUser } from 'redux/auth-operations';
import { PrivateRoute } from './PrivateRoute';
import { getRefreshing } from 'redux/selectors';
import { PublicRoute } from './PublicRoute';
import { Loader } from './Loader/Loader';

const Contacts = lazy(() => import('pages/Constacts/Contacts'))

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getRefreshing);
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return ( isRefreshing ? (<Loader/>) : ( 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="login" />}></Route>
          <Route path="register" element={<Registration />}></Route>
          <Route path="login" element={<PublicRoute component={<LoginForm/>} redirectTo='/contacts'/>}></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    ))
};
