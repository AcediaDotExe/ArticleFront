import React from 'react'
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { UiActionType } from '../../../types/ui'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import './css/NavLeftPart.css'

import favicon from '/src/assets/icons/favicon.png'
import faviconDark from '/src/assets/icons/favicon-dark.png'

const NavLeftPart = () => {
    const isSidebarOpen: boolean = useTypedSelector(
        (state) => state.ui.isSidebarOpen
    )
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )

    const dispatch = useDispatch()

    return (
        <>
            <Box sx={{ margin: 0, padding: 0 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    display="flex"
                >
                    <Tooltip title={'Menu'}>
                        <IconButton
                            color={'info'}
                            sx={{
                                ...(isSidebarOpen && { display: 'none' }),
                                mr: 3,
                            }}
                            onClick={() =>
                                dispatch({ type: UiActionType.OPEN_SIDEBAR })
                            }
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>

                    <Link
                        to="/"
                        style={{ color: '#e3f2fd', textDecoration: 'none' }}
                    >
                        {isDarkMode ? (
                            <>
                                <img
                                    src={faviconDark}
                                    alt="Kitty"
                                    className={'favicon'}
                                />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="div"
                                    className={'font-Sono'}
                                    id={'logo'}
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'inline-block',
                                        },
                                        ml: 1,
                                    }}
                                >
                                    <div id={'logo-inside'}>Caticles</div>
                                </Typography>
                            </>
                        ) : (
                            <>
                                <img
                                    src={favicon}
                                    alt="Dark Kitty"
                                    className={'favicon'}
                                />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="div"
                                    className={'font-Sono'}
                                    id={'light-logo'}
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'inline-block',
                                        },
                                        ml: 1,
                                    }}
                                >
                                    <div id={'light-logo-inside'}>Caticles</div>
                                </Typography>
                            </>
                        )}
                    </Link>
                </Grid>
            </Box>
        </>
    )
}

export default NavLeftPart
