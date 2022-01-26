import { combineReducers } from "redux";
import { postReducer } from './postReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
    posts: postReducer,
    filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>