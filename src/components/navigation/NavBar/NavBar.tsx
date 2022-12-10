import React, {useEffect} from 'react'

import {
    AppBar,
    AppBarProps,
    Button,
    CssBaseline,
    Grid,
    styled,
    Toolbar,
    Typography, useMediaQuery, useTheme,
} from '@mui/material'
import NavLeftPart from './NavLeftPart'
import NavRightPart from './NavRightPart'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { drawerWidth } from '../../../themes/themes'

const NavBar = () => {
    const isSidebarOpen: boolean = useTypedSelector(
        (state) => state.sidebar.isSidebarOpen
    )

    interface StyledAppBarProps extends AppBarProps {
        open?: boolean
    }


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const StyledAppBar = styled(AppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<StyledAppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }))

    useEffect(() => {
        console.log(matches)
    })

    return (
        <>
            <CssBaseline />
            {matches ?
                <StyledAppBar
                    position="fixed"
                    color={'primary'}
                    open={isSidebarOpen}
                >
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <NavLeftPart />
                            <NavRightPart />
                        </Grid>
                    </Toolbar>
                </StyledAppBar>
                :
                <AppBar>
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <NavLeftPart />
                            <NavRightPart />
                        </Grid>
                    </Toolbar>
                </AppBar>
            }

        </>
    )
}

export default NavBar
