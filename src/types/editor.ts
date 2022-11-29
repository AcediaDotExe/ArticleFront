export interface EditorState {
    title: string
    content: string
    previewImage: string
}

export enum EditorActionType {
    SET_TITLE = 'SET_TITLE',
    SET_CONTENT = 'SET_CONTENT',
    SET_PREVIEW_IMAGE = 'SET_PREVIEW_IMAGE',
}

export interface EditorAction {
    type: EditorActionType
    payload: string
}
