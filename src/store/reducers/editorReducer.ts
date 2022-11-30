import { EditorAction, EditorActionType, EditorState } from '../../types/editor'
import { UiActionType } from '../../types/ui'

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
        case EditorActionType.OPEN_PREVIEW_MODAL:
            return { ...state, isPreviewOpen: true }
        case EditorActionType.CLOSE_PREVIEW_MODAL:
            return { ...state, isPreviewOpen: false }
        default:
            return state
    }
}
