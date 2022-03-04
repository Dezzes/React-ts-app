import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../components/hooks/TypedUseSelectorHook";
import LoginForm from "../components/Login/LoginForm";
import Posts from "../pages/Posts";
import Todos from "../pages/Todos";

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        isAuth ?
            <Routes>
                <Route path="*" element={<Navigate replace to="react-ts-app/posts" />} />
                <Route path="react-ts-app/posts" element={<Posts />} />
                <Route path="react-ts-app/todos" element={<Todos />} />
            </Routes>
            :
            <Routes>
                <Route path='*' element={<Navigate replace to="react-ts-app/login" />} />
                <Route path='react-ts-app/login' element={<LoginForm />} />
            </Routes>
    );
};

export default AppRouter;