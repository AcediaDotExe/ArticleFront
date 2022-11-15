import React from 'react'
import { Box, DialogContent } from '@mui/material'
import { drawerWidth } from '../../../themes/themes'
import Themes from './Themes/Themes'

const SidebarContent = () => {
    return (
        <DialogContent style={{ overflow: 'hidden' }}>
            <Box width={drawerWidth} textAlign="center">
                <Themes />
            </Box>
        </DialogContent>
    )
}

export default SidebarContent
