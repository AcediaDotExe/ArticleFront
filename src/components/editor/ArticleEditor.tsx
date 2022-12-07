import React from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import ContentEditor from './contentEditor/ContentEditor'
import PreviewButton from './Preview/PreviewButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { EditorActionType } from '../../types/editor'
import SubmitButton from './submitButton/SubmitButton'

const ArticleEditor = () => {
    const title: string = useTypedSelector((state) => state.editor.title)
    const previewImage: string = useTypedSelector(
        (state) => state.editor.previewImage
    )
    const content: string = useTypedSelector((state) => state.editor.content)
    const dispatch = useDispatch()

    function handleTitleChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        dispatch({
            type: EditorActionType.SET_TITLE,
            payload: event.target.value,
        })
    }
    function handlePreviewImageChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
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

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                display="flex"
                spacing={5}
            >
                <Grid
                    item
                    sx={{
                        mt: '15px',
                    }}
                >
                    <PreviewButton />
                </Grid>
                <Grid
                    item
                    sx={{
                        mt: '15px',
                    }}
                >
                    <SubmitButton
                        title={title}
                        previewImage={previewImage}
                        content={content}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ArticleEditor
