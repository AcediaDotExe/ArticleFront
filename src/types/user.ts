export interface UserState {
    id: string | undefined
    username: string | undefined
    email?: string | undefined
    avatar: string | undefined
}

export enum UserActionType {
    SET_USER = 'SET_USER',
    ID = 'ID',
    USERNAME = 'USERNAME',
    EMAIL = 'EMAIL',
    AVATAR = 'AVATAR',
}

export interface UsersAction {
    type: UsersActionType
    payload: UserState
}

export enum UsersActionType {
    ADD_USER = 'ADD_USER',
}

export interface UserAction {
    type: UserActionType
    payload: UserState
}
