import { cookies } from './readCookies'
import { isSystemInDarkMode } from './readSystemData'

interface userDataI {
    isDarkMode: boolean
    isSidebarOpen: boolean
}

export const userData: userDataI = {
    isDarkMode:
        cookies.isDarkMode !== null ? cookies.isDarkMode : isSystemInDarkMode,
    isSidebarOpen: cookies.isSidebarOpen,
}
