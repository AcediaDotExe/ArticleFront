import {
    ThemesAction,
    ThemesActionTypes,
    ThemesState,
} from '../../types/themes'
import { userData } from '../../utils/onLoadingPage/userData'

const initialState: ThemesState = {
    isDarkMode: userData.isDarkMode,
}

export const themesReducer = (
    state = initialState,
    action: ThemesAction
): ThemesState => {
    switch (action.type) {
        case ThemesActionTypes.SWITCH:
            document.cookie = 'isDarkMode=' + action.payload
            return { isDarkMode: action.payload }
        default:
            return state
    }
}
