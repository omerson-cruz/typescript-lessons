import axios from 'axios';


const url = 'http://jsonplaceholder.typicode.com/todos/1';

// interface defines the structure of an object
interface Todo {
	// userId: number  ==> we can totally ignore other properties with typescript
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then( response => {
		console.log(response.data)
		const todo = response.data as Todo;

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
		${id}
		${title}
		${completed}
	`)
}