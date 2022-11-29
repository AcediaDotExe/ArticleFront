import { UserState } from './user'

export interface AuthState {
    user: UserState | null | undefined
    isFetching: boolean
    error: any
}

export enum AuthActionType {
    LOGIN_START = 'LOGIN_START',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT = 'LOGOUT',
}

export interface AuthAction {
    type: AuthActionType
    payload?: UserState
}
