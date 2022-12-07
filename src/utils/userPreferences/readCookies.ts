import { ICookies } from '../../types/cookie'

function getCookies(): ICookies {
    const cookies: ICookies = {
        isDarkMode: null,
        isSidebarOpen: false,
        token: '',
    }
    const value = `${document.cookie}`
    const parts = value.split('; ')
    parts.forEach((part) => {
        const cookiePiece = part.split('=')
        console.log(cookiePiece)
        if (cookiePiece[0] === 'isSidebarOpen') {
            cookies.isSidebarOpen = cookiePiece[1] === 'true'
        }
        if (cookiePiece[0] === 'isDarkMode') {
            cookies.isDarkMode = cookiePiece[1] === 'true'
        }
        if (cookiePiece[0] === 'token') {
            cookies.token = cookiePiece[1]
        }
    })
    return cookies
}

export const cookies: ICookies = getCookies()
