import { combineReducers } from 'redux'
import { sidebarReducer } from './sidebarReducer'
import { themesReducer } from './themeReducer'
import { editorReducer } from './editorReducer'
import {authenticationReducer} from "./authenticationReducer";

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    themes: themesReducer,
    editor: editorReducer,
    authentication: authenticationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
