import { combineReducers } from 'redux'
import { uiReducer } from './uiReducer'
import { themesReducer } from './themeReducer'
import { editorReducer } from './editorReducer'
import { authReducer } from './authReducer'
import { userReducer } from './userReducer'
import { articlesReducer } from './articlesReducer'
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    sidebar: uiReducer,
    themes: themesReducer,
    editor: editorReducer,
    ui: uiReducer,
    auth: authReducer,
    user: userReducer,
    articles: articlesReducer,
    users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
