import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Avatar, Paper } from '@mui/material'

interface IUserAvatar {
    avatar: string
}

const UserAvatar: FC<IUserAvatar> = ({ avatar }) => {
    return (
        // <Paper variant="outlined">
        <Avatar src={avatar} />
        // </Paper>
    )
}

export default UserAvatar
