import { combineReducers } from 'redux'
import { sidebarReducer } from './sidebarReducer'
import { themesReducer } from './themeReducer'
import { editorReducer } from './editorReducer'

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    themes: themesReducer,
    editor: editorReducer,
})

export type RootState = ReturnType<typeof rootReducer>
