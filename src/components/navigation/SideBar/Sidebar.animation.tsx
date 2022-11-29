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
import { UiActionType } from '../../../types/ui'

const SidebarAnimation: FC<OnlyChildProps> = ({ children }) => {
    const isSidebarOpen: boolean = useTypedSelector(
        (state) => state.ui.isSidebarOpen
    )
    const dispatch = useDispatch()

    function handleDrawerClose() {
        dispatch({ type: UiActionType.CLOSE_SIDEBAR })
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
