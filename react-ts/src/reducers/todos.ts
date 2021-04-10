import { Todo, FetchTodosAction , DeleteTodoAction, ActionTypes, Action} from '../actions'
// import { ActionTypes} from '../actions/types'  /// no need for this. We have a central export actions/index.ts

export const todosReducer = (
	state: Todo[] = [],
	// action: FetchTodosAction | DeleteTodoAction
	action: Action  /// ===> Now a Union type
) => {

	switch(action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		case ActionTypes.deleteTodo:
			return state.filter((todo: Todo) => todo.id !== action.payload)
		default:
			return state;
	}
}