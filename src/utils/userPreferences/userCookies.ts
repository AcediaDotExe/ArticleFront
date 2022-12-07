import { cookies } from './readCookies'
import { isSystemInDarkMode } from './readSystemData'
import { ICookies } from '../../types/cookie'

export const userCookies: ICookies = {
    isDarkMode:
        cookies.isDarkMode !== null ? cookies.isDarkMode : isSystemInDarkMode,
    isSidebarOpen: cookies.isSidebarOpen,
}
