import React from 'react'

import {AppBar, AppBarProps, Button, CssBaseline, Grid, styled, Toolbar, Typography} from '@mui/material'
import NavLeftPart from "./NavLeftPart";
import NavRightPart from "./NavRightPart";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {drawerWidth} from "../../../themes/themes";

const NavBar = () => {
    const isSidebarOpen: boolean = useTypedSelector(state => state.sidebar.isSidebarOpen)

    interface StyledAppBarProps extends AppBarProps {
        open?: boolean;
    }

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
    }));

    return <>
        <CssBaseline/>
            <StyledAppBar position="static" sx={{ bgcolor: ""}} open={isSidebarOpen}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item xs={4}>
                            <NavLeftPart/>
                        </Grid>
                        <Grid item xs={1.7}>
                            <NavRightPart/>
                    </Grid>
                    </Grid>
                </Toolbar>
            </StyledAppBar>
        </>
}

export default NavBar
