import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLogin, getRefreshing } from "redux/selectors";

export const PublicRoute = ({component: Component, redirectTo}) => {
    const isLoggedIn = useSelector(getIsLogin);
    const isRefreshing = useSelector(getRefreshing)
    const shouldRedirect = isLoggedIn && !isRefreshing
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}