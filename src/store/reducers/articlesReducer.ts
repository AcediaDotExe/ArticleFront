import { UserAction, UserActionType, UserState } from '../../types/user'
import { setUser } from '../../utils/userAuth/user'
import {
    ArticlesAction,
    ArticlesActionType,
    IArticle,
    IArticleList,
} from '../../types/articles'

const initialState: IArticleList = {
    articles: [],
}

export const articlesReducer = (
    state = initialState,
    action: ArticlesAction
): IArticleList => {
    switch (action.type) {
        case ArticlesActionType.SET_ARTICLES: {
            return action.payload
        }
        default:
            return state
    }
}
