import React, { FC } from 'react'
import { OnlyChildProps } from '../../types/types'
import { darkTheme, lightTheme } from '../../themes/themes'
import { Skeleton, ThemeProvider } from '@mui/material'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const ThemeProviderWrapper: FC<OnlyChildProps> = ({ children }) => {
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )

    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </>
    )
}

export default ThemeProviderWrapper
