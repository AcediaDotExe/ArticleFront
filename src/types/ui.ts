export enum UiActionType {
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
    OPEN_SIGN_IN_MODAL_WINDOW = 'OPEN_SIGN_IN_MODAL_WINDOW',
    CLOSE_SIGN_IN_MODAL_WINDOW = 'CLOSE_SIGN_IN_MODAL_WINDOW',
}

export interface UiState {
    isSidebarOpen: boolean
    isSignInModalOpen: boolean
}
export interface uiAction {
    type: UiActionType
    payload?: boolean
}
