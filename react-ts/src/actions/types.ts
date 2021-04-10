import { FetchTodosAction, DeleteTodoAction } from './todos'


export enum ActionTypes {
	fetchTodos, // value is default 0. Instead of a String we are going to use the Enum
	deleteTodo
}

// Union Type Action
export type Action = FetchTodosAction | DeleteTodoAction;




