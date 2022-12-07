import React from 'react'
import NavButton from './NavButton/NavButton'
import CreateIcon from '@mui/icons-material/Create'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import HistoryIcon from '@mui/icons-material/History'
import { Box, Grid, IconButton, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './css/NavRightPart.css'
import SignInButton from '../../authentication/NavSignInButton'
import UserAvatar from '../../user/UserAvatar'

const NavRightPart = () => {
    const avatar: string | undefined = useTypedSelector(
        (state) => state.user.avatar
    )
    console.log(avatar)
    return (
        <>
            <Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Tooltip title={'Create'}>
                        <IconButton
                            component={Link}
                            to={'/creating'}
                            color={'info'}
                        >
                            <CreateIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={'History'}>
                        <IconButton
                            component={Link}
                            to={'/my-history'}
                            color={'info'}
                        >
                            <HistoryIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={'My Articles'}>
                        <IconButton
                            component={Link}
                            to={'/my-articles'}
                            color={'info'}
                        >
                            <MenuBookIcon />
                        </IconButton>
                    </Tooltip>
                    {avatar ? <UserAvatar avatar={avatar} /> : <SignInButton />}
                </Grid>
            </Box>
        </>
    )
}

export default NavRightPart
