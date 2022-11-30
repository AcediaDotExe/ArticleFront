import { getParsedToken, getToken } from '../queryParams/token'
import { UserState } from '../../types/user'

export async function setUser(): UserState {
    const user = {
        id: undefined,
        username: undefined,
        avatar: undefined,
        email: undefined,
    }
    const id: string | undefined = getParsedToken()?.sub ?? undefined
    if (id) {
        const bearerToken = String(getToken())
        await fetch('https://comgrid.ru:8080/users/', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + bearerToken,
            }),
        })
            .then(async (response) => await response.json())
            .then((data) => {
                return {
                    id: data.id,
                    username: data.username,
                    avatar: data.avatar,
                    email: data.email,
                }
            })
            .catch(function (error: any) {
                console.log(error)
            })
            .then(function () {
                return user
            })
    }
}
