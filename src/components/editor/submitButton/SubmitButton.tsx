import React, { FC } from 'react'
import { Button, Typography } from '@mui/material'
import { getToken } from '../../../utils/queryParams/token'
import { serverUrl } from '../../../assets/urls/urls'
import { EditorActionType, EditorState } from '../../../types/editor'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';

const SubmitButton: FC<EditorState> = (article) => {
    const navigate = useNavigate()
    async function submitArticle() {
        if (isArticleValid(article)) {
            const bearerToken = String(getToken())
            const rawResponse = await fetch(serverUrl + 'articles', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + bearerToken,
                },
                body: JSON.stringify(article),
            })
            const content = await rawResponse.json()

            if (content.id !== undefined) {
                navigate('/reading/' + String(content.id))
                // dispatch({ type: EditorActionType.SET_TITLE, payload: '' })
                // dispatch({
                //     type: EditorActionType.SET_PREVIEW_IMAGE,
                //     payload: '',
                // })
                // dispatch({ type: EditorActionType.SET_CONTENT, payload: '' })
                // dispatch({
                //     type: EditorActionType.SET_SUBMIT_CALLBACK,
                //     payload: 'Saved!',
                // })
                // setTimeout(() => {
                //     dispatch({
                //         type: EditorActionType.SET_SUBMIT_CALLBACK,
                //         payload: '',
                //     })
                // }, 5000)
            } else {
                dispatch({
                    type: EditorActionType.SET_SUBMIT_CALLBACK,
                    payload: 'Error!',
                })
            }
        }
    }

    const dispatch = useDispatch()
    function isArticleValid(article: EditorState): boolean {
        if (article.title === '') {
            dispatch({
                type: EditorActionType.SET_SUBMIT_CALLBACK,
                payload: 'Title is empty!',
            })
            return false
        }
        if (article.previewImage === '') {
            dispatch({
                type: EditorActionType.SET_SUBMIT_CALLBACK,
                payload: 'Preview image is empty!',
            })
            return false
        }
        if (article.content === '') {
            dispatch({
                type: EditorActionType.SET_SUBMIT_CALLBACK,
                payload: 'Content is empty!',
            })
            return false
        }
        return true
    }

    return (
        <Button variant="outlined" color="secondary" onClick={submitArticle}>
            <Typography fontFamily="Sono">Submit</Typography>
        </Button>
    )
}

export default SubmitButton
