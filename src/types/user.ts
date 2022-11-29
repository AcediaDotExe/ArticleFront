export interface UserState {
    id: string | undefined
    username: string | undefined
    email: string | undefined
    avatar: string | undefined
}

export enum UserActionType{
    SET_USER= "SET_USER",
    ID = "ID",
    USERNAME = "USERNAME",
    EMAIL = "EMAIL",
    AVATAR = "AVATAR",
}

export interface UserAction {
    type: UserActionType
    payload: UserState
}
