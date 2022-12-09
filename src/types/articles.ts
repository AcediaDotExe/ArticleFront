export interface ArticlesState{
    articles: ArticleState[]
}

export interface ArticleState {
    id: number
    title: string
    creatorId: string
    updated: number
    created: string
    previewImage: string
}

export enum ArticlesActionType {
    SET_ARTICLES = 'SET_ARTICLES',
}

export interface ArticlesAction {
    type: ArticlesActionType
    payload: ArticlesState
}
