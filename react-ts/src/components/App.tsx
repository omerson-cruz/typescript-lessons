import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
	todos: Todo[];
	// fetchTodos: typeof fetchTodos; // this will cause an error @276 2:00
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}



class _App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props)

		this.state = { fetching: false };
	}

	onButtonClick = (): void => {
		this.props.fetchTodos()
		this.setState(() => ({ fetching: true }))  /// set the loading to true
	}

	componentDidUpdate(prevProps: AppProps): void {
		if(!prevProps.todos.length && this.props.todos.length){
			 // this simply check that the previous Props has No Todos Array (initial state)
			 //   AND
			 // ther is a new length or ARRAY  of todos has new content fetched from the server
			 // Note that this is a loose checking
			 this.setState({fetching: false})

		}
	}



	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
					{todo.title}
				</div>
			)
		})
	}

	render() {
		console.log(this.props.todos)
		return (
			<div>
			 <button onClick={this.onButtonClick}>Fetch</button>
			 <div>{this.state.fetching ? 'LOADING' : null}</div>
			 {this.renderList()}
			</div>
		)
	}
}

// const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
// 	return { todos: state.todos }
// }


// using Destructuring syntax
const mapStateToProps = ({ todos }: StoreState): {todos: Todo[]} => {
	return { todos }
}

export const App = connect(
	mapStateToProps,
	{ fetchTodos, deleteTodo }
)(_App);



