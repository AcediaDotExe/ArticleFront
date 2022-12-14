import { parseJwt } from '../parsers/jwt'
import { cookies } from '../userPreferences/readCookies'

export function getParsedToken(): IToken | null {
    const token: string | null = getToken()
    if (token !== null) {
        return parseJwt(token)
    }
    return null
}

export function getToken(): string | null {
    let token: string | null | undefined = cookies.token

    if (token !== undefined && token !== 'null' && token !== '') {
        return token
    }
    const urlParams = new URLSearchParams(window.location.search)
    token = urlParams.get('token')
    if(token === null || token === undefined){
        return null
    }

    const expireDate = new Date()
    // add 7 days to current date
    expireDate.setTime(expireDate.getTime() + 7 * 24 * 60 * 60 * 1000)
    document.cookie = `token=${String(token)};expires=${expireDate.toUTCString()}`
    return token
}

export interface IToken {
    sub: string
    iat: string
    exp: string
}
