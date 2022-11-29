import { EditorAction, EditorActionType, EditorState } from '../../types/editor'

const initialState: EditorState = {
    title: '',
    content: '',
    previewImage: '',
}

export const editorReducer = (
    state = initialState,
    action: EditorAction
): EditorState => {
    switch (action.type) {
        case EditorActionType.SET_TITLE:
            return { ...state, title: action.payload }
        case EditorActionType.SET_CONTENT:
            return { ...state, content: action.payload }
        case EditorActionType.SET_PREVIEW_IMAGE:
            return { ...state, previewImage: action.payload }
        default:
            return state
    }
}
