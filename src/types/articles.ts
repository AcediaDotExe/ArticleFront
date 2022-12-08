export interface ArticleEditorType {
    title: string
    previewImage: string
    content: string
}

export interface IArticleList {
    articles: IArticle[]
}

export interface IArticle {
    id: number
    title: string
    creatorId: string
    updated: number
    created: string
    previewImage: string
}

export interface IArticlePreview {
    id: number
    article: IArticle
}

export enum ArticlesActionType {
    SET_ARTICLES = 'SET_ARTICLES',
}

export interface ArticlesAction {
    type: ArticlesActionType
    payload: IArticleList
}
