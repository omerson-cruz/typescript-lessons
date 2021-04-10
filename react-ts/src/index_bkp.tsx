import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

interface AppProps{
	color?: string;
}

// interface AppState{
// 	counter: number;
// }

const App = (props: AppProps): JSX.Element => {
	return (
		<div>
			{props.color}
		</div>
	)
}


// class App extends React.Component<AppProps, AppState>{
// 	state = { counter: 5}

// 	onIncrement = (): void => {
// 		console.log('increment')
// 		this.setState({ counter: this.state.counter + 1});
// 	}

// 	onDecrement = (): void => {
// 		console.log('decrement')
// 		this.setState({ counter: this.state.counter - 1});
// 	}

// 	render() {
// 		return(
// 			<div>
// 				<button onClick={this.onIncrement}>Increment</button>
// 				<button onClick={this.onDecrement}>Decrement</button>
// 				<div>{this.state.counter} - test</div>
// 			</div>
// 		)

// 	}
// }

ReactDOM.render(
	<App color="yello"/>,
	document.querySelector('#root')
	)