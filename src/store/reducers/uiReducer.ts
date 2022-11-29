import { uiAction, UiActionType, UiState } from '../../types/ui'
import { userCookies } from '../../utils/userPreferences/userCookies'

const initialState: UiState = {
    isSidebarOpen: userCookies.isSidebarOpen,
    isSignInModalOpen: false,
}

export const uiReducer = (state = initialState, action: uiAction): UiState => {
    switch (action.type) {
        case UiActionType.OPEN_SIDEBAR:
            document.cookie = 'isSidebarOpen=true'
            return { ...state, isSidebarOpen: true }
        case UiActionType.CLOSE_SIDEBAR:
            document.cookie = 'isSidebarOpen=false'
            return { ...state,  isSidebarOpen: false}
        case UiActionType.OPEN_SIGN_IN_MODAL_WINDOW:
            return { ...state, isSignInModalOpen: true }
        case UiActionType.CLOSE_SIGN_IN_MODAL_WINDOW:
            return { ...state, isSignInModalOpen: false }
        default:
            return state
    }
}
