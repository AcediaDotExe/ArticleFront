export enum ThemesActionTypes {
    SWITCH = 'SWITCH',
}

export interface ThemesState {
    isDarkMode: boolean
}

export interface ThemesAction {
    type: ThemesActionTypes
    payload: boolean
}
