import React from 'react'
import { TextField, Typography } from '@mui/material'
import ContentEditor from '../contentEditor/ContentEditor'
import PreviewButton from '../PreviewButton/PreviewButton'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { EditorActionType } from '../../../types/editor'

const ArticleEditor = () => {
    const title: string = useTypedSelector((state) => state.editor.title)
    const previewImage: string = useTypedSelector(
        (state) => state.editor.previewImage
    )
    const dispatch = useDispatch()

    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: EditorActionType.SET_TITLE,
            payload: event.target.value,
        })
    }
    function handlePreviewImageChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        dispatch({
            type: EditorActionType.SET_PREVIEW_IMAGE,
            payload: event.target.value,
        })
    }
    return (
        <>
            <Typography fontFamily="Sono" fontSize={26}>
                New article:
            </Typography>
            <TextField
                color="secondary"
                id="filled-basic"
                label="Title"
                variant="filled"
                value={title}
                defaultValue="title"
                onChange={handleTitleChange}
                sx={{
                    width: '70%',
                    mt: '10px',
                    mb: '20px',
                    textAlign: 'center',
                }}
            />
            <TextField
                color="secondary"
                id="filled-basic"
                label="Preview image URL"
                variant="filled"
                value={previewImage}
                defaultValue="Image URL"
                onChange={handlePreviewImageChange}
                sx={{
                    width: '70%',
                    mb: '20px',
                    textAlign: 'center',
                }}
            />
            <ContentEditor />
            <PreviewButton />
        </>
    )
}

export default ArticleEditor
