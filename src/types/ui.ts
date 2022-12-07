export enum UiActionType {
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
    OPEN_SIGN_IN_MODAL_WINDOW = 'OPEN_SIGN_IN_MODAL_WINDOW',
    CLOSE_SIGN_IN_MODAL_WINDOW = 'CLOSE_SIGN_IN_MODAL_WINDOW',
    SET_AVATAR_ANCHOR = 'SET_AVATAR_ANCHOR',
}

export interface UiState {
    isSidebarOpen: boolean
    isSignInModalOpen: boolean
    avatarAnchor: null | HTMLElement
}
export interface uiAction {
    type: UiActionType
    payload?: boolean | HTMLElement
}
