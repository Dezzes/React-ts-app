import { combineReducers } from "redux";
import { postReducer } from './postReducer';
import { filterReducer } from './filterReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
    posts: postReducer,
    filter: filterReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>