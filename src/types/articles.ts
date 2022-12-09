export interface ArticlesState {
    articles: ArticleState[],
    article: ArticleState | undefined,
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
    SET_ARTICLE = 'SET_ARTICLE',
}

export interface ArticlesAction {
    type: ArticlesActionType
    payload: ArticleState[] | ArticleState
}
