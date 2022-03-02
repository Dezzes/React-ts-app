import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../components/hooks/TypedUseSelectorHook";
import LoginForm from "../components/Login/LoginForm";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from './index';

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map((route => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )))}
                <Route path="*" element={<Posts />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )))}
                <Route path="*" element={<LoginForm />} />
            </Routes>
    );
};

export default AppRouter;