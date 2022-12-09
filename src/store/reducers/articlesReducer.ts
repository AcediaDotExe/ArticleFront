import {ArticlesAction, ArticlesActionType, ArticlesState, ArticleState,} from '../../types/articles'

const initialState: ArticlesState = {
    articles: [],
    article: undefined,
}

export const articlesReducer = (
    state = initialState,
    action: ArticlesAction
): ArticlesState => {
    switch (action.type) {
        case ArticlesActionType.SET_ARTICLES:
            return {...state, articles: action.payload as ArticleState[]}
        case ArticlesActionType.SET_ARTICLE:
            return {...state, article: action.payload as ArticleState}
        default:
            return state
    }
}
