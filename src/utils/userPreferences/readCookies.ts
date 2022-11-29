interface cookiesI {
    isDarkMode: boolean | null
    isSidebarOpen: boolean
}

function getCookies(): cookiesI {
    const cookies: cookiesI = {
        isDarkMode: null,
        isSidebarOpen: false,
    }
    const value = `${document.cookie}`
    const parts = value.split('; ')
    parts.forEach((part) => {
        const cookiePiece = part.split('=')
        if (cookiePiece[0] === 'isSidebarOpen') {
            cookies.isSidebarOpen = cookiePiece[1] === 'true'
        }
        if (cookiePiece[0] === 'isDarkMode') {
            cookies.isDarkMode = cookiePiece[1] === 'true'
        }
    })
    return cookies
}

export const cookies: cookiesI = getCookies()
