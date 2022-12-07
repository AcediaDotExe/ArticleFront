import React from 'react'
import { Button, Typography } from '@mui/material'
import { EditorActionType } from '../../../types/editor'
import { useDispatch } from 'react-redux'
import { PreviewModal } from './PreviewModal'

const PreviewButton = () => {
    const dispatch = useDispatch()

    function showPreview(): void {
        dispatch({ type: EditorActionType.OPEN_PREVIEW_MODAL })
    }

    return (
        <>
            <Button onClick={showPreview}
                    color='secondary'
            >
                <Typography
                    color="secondary"
                    fontFamily={'Sono'}
                >
                    Preview
                </Typography>
            </Button>
            <PreviewModal />
        </>
    )
}

export default PreviewButton
