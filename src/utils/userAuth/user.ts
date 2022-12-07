import { getParsedToken, getToken } from '../queryParams/token'
import { UserState } from '../../types/user'

export async function setUser(): Promise<UserState | undefined> {
    const user: UserState = {
        id: undefined,
        username: undefined,
        avatar: undefined,
        email: undefined,
    }
    const id: string | undefined = getParsedToken()?.sub ?? undefined
    if (id !== undefined) {
        return await fetchUser()
    }
    return user
}

async function fetchUser(): Promise<UserState> {
    const bearerToken = String(getToken())
    return await fetch('https://comgrid.ru/article-api/users/', {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearerToken,
        }),
    })
        .then(async (response) => await response.json())
        .then((data: UserState) => {
            return data
        })
        .catch(function (error: any) {
            console.warn(error)
        })
        .then()
}
