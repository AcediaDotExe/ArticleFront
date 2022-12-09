import React, { FC } from 'react'
import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { TransitionProps } from '@mui/material/transitions'
import './preview.css'
import { EditorActionType } from '../../../types/editor'

const parse = require('html-react-parser')

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />
})

export const PreviewModal: FC = () => {
    const isModalOpen: boolean =
        useTypedSelector((state) => state.editor.isPreviewOpen) ?? false

    const dispatch = useDispatch()
    const content: string = useTypedSelector((state) => state.editor.content)

    function handleClosePreviewModal(): void {
        dispatch({ type: EditorActionType.CLOSE_PREVIEW_MODAL })
    }

    return (
        <Dialog
            open={isModalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClosePreviewModal}
            aria-describedby="alert-dialog-slide-description"
            maxWidth={'md'}
            fullWidth={true}
            scroll={'body'}
        >
            <DialogContent>{parse(content)}</DialogContent>
        </Dialog>
    )
}
