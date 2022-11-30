export interface EditorState {
    title: string
    content: string
    previewImage: string
    isPreviewOpen: boolean
}

export enum EditorActionType {
    SET_TITLE = 'SET_TITLE',
    SET_CONTENT = 'SET_CONTENT',
    SET_PREVIEW_IMAGE = 'SET_PREVIEW_IMAGE',
    OPEN_PREVIEW_MODAL = 'OPEN_PREVIEW_MODAL',
    CLOSE_PREVIEW_MODAL = 'CLOSE_PREVIEW_MODAL',
}

export interface EditorAction {
    type: EditorActionType
    payload: string
}
