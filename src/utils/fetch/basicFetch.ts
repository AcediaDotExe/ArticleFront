import { getToken } from '../queryParams/token'
import { serverUrl } from '../../assets/urls/urls'

export async function getRequest<T>(url: string): Promise<T> {
    const bearerToken = getToken()
    return await fetch(serverUrl + url, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(bearerToken !== null && {
                Authorization: 'Bearer ' + bearerToken,
            }),
        }),
    })
        .then(async (response) => await response.json())
        .then((data: T) => {
            return data
        })
        .catch(function (error: any) {
            console.warn(error)
        })
        .then()
}
