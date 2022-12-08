import React, { FC } from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { Avatar, Box, Button, IconButton, Paper, Tooltip } from '@mui/material'
import { Image } from '@mui/icons-material'
import './user.css'
import { useDispatch } from 'react-redux'
import { UiActionType } from '../../../../types/ui'
import UserSubMenu from './UserSubMenu'

interface IUserAvatar {
    avatar: string
}

const UserAvatar: FC<IUserAvatar> = ({ avatar }) => {
    return (
        <>
            <img id="user-avatar" alt="Avatar" src={avatar} />
        </>
    )
}

export default UserAvatar
