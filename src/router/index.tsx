import LoginForm from '../components/Login/LoginForm';
import Posts from "../pages/Posts";
import Todos from "../pages/Todos";

export interface IRoute {
    path: RouteNames;
    element: React.ReactNode;
}

export enum RouteNames {
    LOGIN = '/login',
    POSTS = '/posts',
    TODOS = "/todos"
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: <LoginForm /> }
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.POSTS, element: <Posts /> },
    { path: RouteNames.TODOS, element: <Todos /> }
]