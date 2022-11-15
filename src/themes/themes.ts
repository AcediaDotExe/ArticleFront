import { createTheme } from '@mui/material'
import black from '@mui/material/colors/blue'
import { light } from '@mui/material/styles/createPalette'

export const drawerWidth = 300

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        info: {
            main: '#e3f2fd',
        },
    },
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        info: {
            main: '#e3f2fd',
        },
        secondary: {
            main: '#6eeeed',
        },
    },
})
