import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Button, Typography } from '@mui/material'
import { EditorActionType } from '../../../types/editor'
import { useDispatch } from 'react-redux'
import { PreviewModal } from '../PreviewModal/PreviewModal'

const PreviewButton = () => {
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )
    const dispatch = useDispatch()

    function showPreview() {
        dispatch({ type: EditorActionType.OPEN_PREVIEW_MODAL })
    }
    let idForStyling
    isDarkMode ? (idForStyling = 'log-in') : (idForStyling = 'light-log-in')
    return (
        <>
            {}
            <Button onClick={showPreview}>
                <Typography
                    color="secondary"
                    fontFamily={'Sono'}
                    id={idForStyling}
                >
                    Preview
                </Typography>
            </Button>
            <PreviewModal />
        </>
    )
}

export default PreviewButton
