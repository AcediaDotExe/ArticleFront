import React from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { ThemesActionTypes } from '../../../../types/themes'
import { MaterialUISwitch } from '../Sidebar.style'
import { FormControlLabel } from '@mui/material'

const Themes = () => {
    const isDarkMode = useTypedSelector((state) => state.themes.isDarkMode)
    const dispatch = useDispatch()

    function handleDarkModeChange() {
        dispatch({ type: ThemesActionTypes.SWITCH, payload: !isDarkMode })
    }

    return (
        <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} />}
            checked={isDarkMode}
            onChange={handleDarkModeChange}
            label="Dark Mode"
        />
    )
}

export default Themes
