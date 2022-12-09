import { getParsedToken, getToken } from '../queryParams/token'
import { UserState } from '../../types/user'
import { serverUrl } from '../../assets/urls/urls'
import { getRequest } from '../fetch/basicFetch'

export async function setUser(): Promise<UserState | undefined> {
    const user: UserState = {
        id: undefined,
        username: undefined,
        avatar: undefined,
        email: undefined,
    }
    const id: string | undefined = getParsedToken()?.sub ?? undefined
    if (id !== undefined) {
        return await getRequest<UserState>('users/')
    }
    return user
}
