import { cookies } from './readCookies'
import { isSystemInDarkMode } from './readSystemData'

interface IUserCookies {
    isDarkMode: boolean
    isSidebarOpen: boolean
}

export const userCookies: IUserCookies = {
    isDarkMode:
        cookies.isDarkMode !== null ? cookies.isDarkMode : isSystemInDarkMode,
    isSidebarOpen: cookies.isSidebarOpen,
}
