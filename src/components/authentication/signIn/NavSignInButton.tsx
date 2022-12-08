import React, { useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { SignInModal } from './SignInModal'
import axios from 'axios'
import { UiActionType } from '../../../types/ui'

const SignUpButton = () => {
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )
    const dispatch = useDispatch()

    function handleSignInButton() {
        dispatch({ type: UiActionType.OPEN_SIGN_IN_MODAL_WINDOW })
    }

    let idForStyling
    isDarkMode ? (idForStyling = 'log-in') : (idForStyling = 'light-log-in')
    return (
        <>
            {}
            <Button onClick={handleSignInButton}>
                <Typography
                    color="secondary"
                    fontFamily={'Sono'}
                    sx={{ textTransform: 'capitalize' }}
                    id={idForStyling}
                >
                    Sign in
                </Typography>
            </Button>
            <SignInModal />
        </>
    )
}

export default SignUpButton
