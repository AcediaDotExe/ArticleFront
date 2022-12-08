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
            if (state.submitCallback !== 'Saved!')
                return { ...state, title: action.payload, submitCallback: '' }
            return { ...state, title: action.payload }
        case EditorActionType.SET_CONTENT:
            if (state.submitCallback !== 'Saved!')
                return { ...state, content: action.payload, submitCallback: '' }
            return { ...state, title: action.payload }
        case EditorActionType.SET_PREVIEW_IMAGE:
            if (state.submitCallback !== 'Saved!')
                return {
                    ...state,
                    previewImage: action.payload,
                    submitCallback: '',
                }
            return { ...state, title: action.payload }
        case EditorActionType.OPEN_PREVIEW_MODAL:
            return { ...state, isPreviewOpen: true }
        case EditorActionType.CLOSE_PREVIEW_MODAL:
            return { ...state, isPreviewOpen: false }
        case EditorActionType.SET_SUBMIT_CALLBACK:
            return { ...state, submitCallback: action.payload }
        default:
            return state
    }
}
