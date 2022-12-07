import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {Avatar, Box, Button, IconButton, Paper, Tooltip} from '@mui/material'
import {Image} from '@mui/icons-material';
import './user.css'
import {useDispatch} from 'react-redux';
import {UiActionType} from '../../types/ui';
import AvatarSubMenu from './AvatarSubMenu';

interface IUserAvatar {
    avatar: string
}


const UserAvatar: FC<IUserAvatar> = ({ avatar }) => {
    const anchor: HTMLElement | null = useTypedSelector(state => state.ui.avatarAnchor)
    const isAvatarSubMenu = Boolean(anchor)
    console.log(isAvatarSubMenu)
    const dispatch = useDispatch()

    const handleOpen = (event: React.MouseEvent<HTMLElement>):void => {
        dispatch({type: UiActionType.SET_AVATAR_ANCHOR, payload: event.currentTarget})
    }

    const handleClose = ():void => {
        dispatch({type: UiActionType.SET_AVATAR_ANCHOR, payload: null})
    };

    return (
        <>
        <Tooltip title={'Profile'}>
            <IconButton
                onClick={handleOpen}
                size="small"
                aria-controls={isAvatarSubMenu ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isAvatarSubMenu ? 'true' : undefined}
                sx={{
                color: 'secondary',
                height: '45px',
                width: '45px',
            }}>
                <img
                    id="user-avatar"
                    alt="Avatar"
                    src={avatar}
                />
            </IconButton>
        </Tooltip>
            <AvatarSubMenu anchorEl={anchor}
                           isAvatarSubMenu={isAvatarSubMenu}
                           handleClose={handleClose}/>
        </>
    )
}

export default UserAvatar
