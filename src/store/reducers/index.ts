import { combineReducers } from "redux";
import { postReducer } from './Post/postReducer';
import { filterReducer } from './filter/filterReducer';
import { todoReducer } from './todo/todoReducer';
import { AuthReducer } from './auth/authReducer';

export const rootReducer = combineReducers({
    posts: postReducer,
    filter: filterReducer,
    todo: todoReducer,
    auth: AuthReducer
})

