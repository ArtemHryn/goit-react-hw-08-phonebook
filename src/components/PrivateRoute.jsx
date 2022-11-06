import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { getIsLogin } from "redux/selectors";

export const PrivateRoute = ({ component: Component, redirectTo ='/' }) => {
    const isLoggedIn = useSelector(getIsLogin);
    return isLoggedIn ? Component : <Navigate to={redirectTo}/>
}