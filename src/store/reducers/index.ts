import { combineReducers } from 'redux'
import { sidebarReducer } from './sidebarReducer'
import { themesReducer } from './themeReducer'

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    themes: themesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
