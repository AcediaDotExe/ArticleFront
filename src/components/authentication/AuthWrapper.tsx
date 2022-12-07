import React, { FC, useEffect } from 'react'
import { OnlyChildProps } from '../../types/types'
import { useDispatch } from 'react-redux'
import { setUser } from '../../utils/userAuth/user'
import { UserActionType } from '../../types/user'

const AuthWrapper: FC<OnlyChildProps> = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        void setUser().then((data) => {
            dispatch({ type: UserActionType.SET_USER, payload: data })
        })
    })

    return <>{children}</>
}

export default AuthWrapper
