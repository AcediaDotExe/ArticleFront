import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import {fetchTodos} from "./reducers/userReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
store.dispatch(fetchTodos)
