import { AuthState, AuthAction, AuthActionTypes } from "./types"
import IUser from '../../../types/IUser';

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: "",
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionTypes.SET_USER:
            return {...state, user: action.payload}
        case AuthActionTypes.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}        
        default:
            return state
    }
}