import { UserAction, UserActionType, UserState } from '../../types/user'
import { setUser } from '../../utils/userAuth/user'
import {
    ArticlesAction,
    ArticlesActionType, ArticlesState,
    ArticleState,
    IArticleList,
} from '../../types/articles'

const initialState: ArticlesState = {
    articles: [],
}

export const articlesReducer = (
    state = initialState,
    action: ArticlesAction
): ArticlesState => {
    switch (action.type) {
        case ArticlesActionType.SET_ARTICLES: {
            return action.payload
        }
        default:
            return state
    }
}
