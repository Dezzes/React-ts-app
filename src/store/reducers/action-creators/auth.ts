import { AuthActionTypes, SetAuthAction, SetIsLoadingAction, SetErrorAction, SetUserAction } from '../auth/types';
import IUser from '../../../types/IUser';
import { AppDispatch } from '../../index';

export const AuthActionCreators = {
    login: (username: string, password: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true))
                    localStorage.setItem("auth", "true")
                    localStorage.setItem("username", username)
                    dispatch(AuthActionCreators.setIsAuth(true))
            } catch (e) {
                dispatch(AuthActionCreators.setError('An Error occured'))
            }
        }
    },

    logout: () => {
        return (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setIsAuth(false))
        }
    },
    
    setUser: (payload: IUser): SetUserAction => ({type:AuthActionTypes.SET_USER, payload}),
    setIsAuth: (payload: boolean): SetAuthAction => ({type:AuthActionTypes.SET_AUTH, payload}),
    setError: (payload: string): SetErrorAction => ({type:AuthActionTypes.SET_ERROR, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type:AuthActionTypes.SET_IS_LOADING, payload}),
}


