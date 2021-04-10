import {combineReducers } from 'redux'
import {todosReducer} from './todos'
import { Todo } from "../actions";


// this will define all of structure of our store, or the entire state of our redux store
export interface StoreState {
	todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
	todos: todosReducer
})

