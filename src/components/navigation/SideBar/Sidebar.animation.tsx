import React, { FC } from 'react'
import { OnlyChildProps } from '../../../types/types'
import {
    DialogContent,
    Divider,
    Drawer,
    IconButton,
    styled,
} from '@mui/material'
import { drawerWidth } from '../../../themes/themes'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { SidebarActionTypes } from '../../../types/sidebar'

const SidebarAnimation: FC<OnlyChildProps> = ({ children }) => {
    const isSidebarOpen: boolean = useTypedSelector(
        (state) => state.sidebar.isSidebarOpen
    )
    const dispatch = useDispatch()

    function handleDrawerClose() {
        dispatch({ type: SidebarActionTypes.CLOSE })
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                boxShadow: 3,
            }}
            variant="persistent"
            anchor="left"
            open={isSidebarOpen}
            onClose={handleDrawerClose}
        >
            {children}
        </Drawer>
    )
}

export default SidebarAnimation
