import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { AuthAction, AuthActionType, AuthState } from '../../types/auth'

const initialState: AuthState = {
    user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!)
        : null,
    isFetching: false,
    error: false,
}

export const authReducer = (
    state = initialState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case AuthActionType.LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            }
        case AuthActionType.LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case AuthActionType.LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            }
        case AuthActionType.LOGOUT:
            return {
                user: null,
                isFetching: false,
                error: false,
            }
        default:
            return { ...state }
    }
}

export default authReducer
