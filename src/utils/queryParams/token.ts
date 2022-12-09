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
    const urlParams = new URLSearchParams(window.location.search)

    if (token !== undefined && token !== 'null' && token !== '') {
        urlParams.delete('token')
        return token
    }
    token = urlParams.get('token')

    document.cookie = `token=${String(token)}`
    return token
}

export interface IToken {
    sub: string
    iat: string
    exp: string
}
