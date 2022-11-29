import React from 'react'
import {
    Box,
    DialogContent,
    Divider,
    Drawer,
    FormControlLabel,
    IconButton,
    Slide,
    styled,
    Tooltip,
    Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { UiActionType, UiState } from '../../../types/ui'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { drawerWidth } from '../../../themes/themes'
import { MaterialUISwitch } from './Sidebar.style'
import SidebarAnimation from './Sidebar.animation'
import { ThemesActionType } from '../../../types/themes'
import SidebarContent from './SidebarContent'

const Sidebar = () => {
    const isSidebarOpen: boolean = useTypedSelector(
        (state) => state.sidebar.isSidebarOpen
    )
    const dispatch = useDispatch()

    function handleDrawerClose() {
        dispatch({ type: UiActionType.CLOSE_SIDEBAR })
    }

    const v = <div></div>
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }))

    return (
        <SidebarAnimation>
            <DrawerHeader>
                <Tooltip title={'Menu'}>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuOpenIcon />
                    </IconButton>
                </Tooltip>
            </DrawerHeader>
            <Divider />

            <SidebarContent />
        </SidebarAnimation>
    )
}

export default Sidebar
