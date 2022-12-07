import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './ContentEditor.css'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { EditorActionType } from '../../../types/editor'
import { Box, CssBaseline, Typography } from '@mui/material'

const ContentEditor = () => {
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )
    const content: string = useTypedSelector((state) => state.editor.content)
    const dispatch = useDispatch()

    return (
        <>
            <Typography fontFamily="Sono" fontSize={20}>
                Content:
            </Typography>
            {isDarkMode ? (
                <>
                    <CssBaseline />
                    <div className="editor-dark editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onChange={(event: any, editor: any) => {
                                const data = editor.getData()
                                dispatch({
                                    type: EditorActionType.SET_CONTENT,
                                    payload: data,
                                })
                            }}
                        />
                    </div>
                </>
            ) : (
                <div className="editor editor-light">
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onChange={(event: any, editor: any) => {
                            const data = editor.getData()
                            dispatch({
                                type: EditorActionType.SET_CONTENT,
                                payload: data,
                            })
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default ContentEditor
