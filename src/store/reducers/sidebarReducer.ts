import {
    SidebarAction,
    SidebarActionTypes,
    SidebarState,
} from '../../types/sidebar'
import { userData } from '../../utils/onLoadingPage/userData'

const initialState: SidebarState = {
    isSidebarOpen: userData.isSidebarOpen,
}

export const sidebarReducer = (
    state = initialState,
    action: SidebarAction
): SidebarState => {
    switch (action.type) {
        case SidebarActionTypes.OPEN:
            document.cookie = 'isSidebarOpen=true'
            return { isSidebarOpen: true }
        case SidebarActionTypes.CLOSE:
            document.cookie = 'isSidebarOpen=false'
            return { isSidebarOpen: false }
        default:
            return state
    }
}
