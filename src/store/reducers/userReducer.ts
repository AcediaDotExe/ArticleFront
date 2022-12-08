import { UserAction, UserActionType, UserState } from '../../types/user'

const initialState: UserState = {
    id: undefined,
    username: undefined,
    avatar: undefined,
    email: undefined,
}

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionType.SET_USER: {
            return action.payload
        }
        case UserActionType.ID:
            return { ...state }
        case UserActionType.USERNAME:
            return { ...state }
        case UserActionType.EMAIL:
            return { ...state }
        case UserActionType.AVATAR:
            return { ...state }
        default:
            return state
    }
}
