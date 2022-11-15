import React from 'react'
import NavButton from './NavButton/NavButton'
import CreateIcon from '@mui/icons-material/Create'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import HistoryIcon from '@mui/icons-material/History'
import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Grid,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './css/NavRightPart.css'

const NavRightPart = () => {
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )

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
                    <Button>
                        {isDarkMode ? (
                            <Typography
                                color="secondary"
                                className={'font-Sono'}
                                id={'log-in'}
                            >
                                Log In
                            </Typography>
                        ) : (
                            <Typography
                                color="secondary"
                                className={'font-Sono'}
                                id={'light-log-in'}
                            >
                                Log In
                            </Typography>
                        )}
                    </Button>
                </Grid>
            </Box>
        </>
    )
}

export default NavRightPart
