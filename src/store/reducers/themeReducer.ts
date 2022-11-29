import { ThemesAction, ThemesActionType, ThemesState } from '../../types/themes'
import { userCookies } from '../../utils/userPreferences/userCookies'

const initialState: ThemesState = {
    isDarkMode: userCookies.isDarkMode,
}

export const themesReducer = (
    state = initialState,
    action: ThemesAction
): ThemesState => {
    switch (action.type) {
        case ThemesActionType.SWITCH:
            document.cookie = 'isDarkMode=' + action.payload
            return { isDarkMode: action.payload }
        default:
            return state
    }
}
