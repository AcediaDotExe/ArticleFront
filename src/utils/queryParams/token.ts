import { parseJwt } from '../parsers/jwt'
import { cookies } from '../userPreferences/readCookies'

export function getParsedToken(): IToken | null {
    const token: string = getToken()
    if (token !== undefined) {
        return parseJwt(token)
    }
    return null
}

export function getToken(): string {
    let token: string | undefined = cookies.token
    const urlParams = new URLSearchParams(window.location.search)

    if (token !== undefined && token !== 'null' && token !== '') {
        urlParams.delete('token')
        return token
    }
    token = urlParams.get('token') as string

    document.cookie = `token=${token}`
    return token
}

export interface IToken {
    sub: string
    iat: string
    exp: string
}
