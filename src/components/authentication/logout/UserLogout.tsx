import React, { FC } from 'react'
import { ListItemIcon, MenuItem, Typography } from '@mui/material'
import { Logout } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { UserActionType } from '../../../types/user'

const UserLogout: FC = () => {
    const dispatch = useDispatch()
    function logout(): void {
        document.cookie = 'token='
        dispatch({ type: UserActionType.SET_USER, payload: null })
        window.location.href = '/'
    }
    return (
        <MenuItem onClick={logout}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            <Typography fontFamily="Sono">Logout</Typography>
        </MenuItem>
    )
}

export default UserLogout
