import React, { FC, useEffect } from 'react'
import { OnlyChildProps } from '../../types/types'
import { useDispatch } from 'react-redux'
import { setUser } from '../../utils/userAuth/user'
import { UserActionType } from '../../types/user'
import { basicUrl } from '../../assets/urls/urls'

const AuthWrapper: FC<OnlyChildProps> = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        void setUser().then((data) => {
            dispatch({ type: UserActionType.SET_USER, payload: data })
            // window.history.replaceState({}, document.title, basicUrl + refineURL());
        })
    })

    function refineURL(): string {
        const currURL = window.location.href
        const afterDomain = currURL.substring(currURL.lastIndexOf('/') + 1)
        return afterDomain.split('?')[0]
    }

    return <>{children}</>
}

export default AuthWrapper
