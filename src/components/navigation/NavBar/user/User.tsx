import React, { FC } from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import UserAvatar from './UserAvatar'
import {Button, Grid, IconButton, Tooltip, Typography} from '@mui/material'
import UserSubMenu from './UserSubMenu'
import { useDispatch } from 'react-redux'
import { UiActionType } from '../../../../types/ui'

const User: FC = () => {
    let username: string = useTypedSelector((state) => state.user.username)
    username = username.split(' ')[0]

    const avatar: string = useTypedSelector(
        (state) => state.user.avatar
    ) as string

    const anchor: HTMLElement | null = useTypedSelector(
        (state) => state.ui.avatarAnchor
    )
    const isAvatarSubMenu = Boolean(anchor)

    const dispatch = useDispatch()

    const handleOpen = (event: React.MouseEvent<HTMLElement>): void => {
        dispatch({
            type: UiActionType.SET_AVATAR_ANCHOR,
            payload: event.currentTarget,
        })
    }

    const handleClose = (): void => {
        dispatch({ type: UiActionType.SET_AVATAR_ANCHOR, payload: null })
    }

    return (
        <>
            <Tooltip title="Profile">
            <Grid
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Button
                    color="secondary"
                    onClick={handleOpen}
                    size="small"
                    aria-controls={isAvatarSubMenu ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isAvatarSubMenu ? 'true' : undefined}
                    sx={{
                        textTransform: 'none',
                        marginLeft: '3px',
                    }}
                >
                    <UserAvatar avatar={avatar} />
                    <Typography font="Sono" sx={{marginLeft: '7px', marginTop: '3px'}}>{username}</Typography>
                </Button>
            </Grid>
            </Tooltip>
            <UserSubMenu
                anchorEl={anchor}
                isAvatarSubMenu={isAvatarSubMenu}
                handleClose={handleClose}
            />
        </>
    )
}

export default User
