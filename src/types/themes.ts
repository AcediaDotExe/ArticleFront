export enum ThemesActionType {
    SWITCH = 'SWITCH',
}

export interface ThemesState {
    isDarkMode: boolean
}

export interface ThemesAction {
    type: ThemesActionType
    payload: boolean
}
