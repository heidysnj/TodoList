import React, { useState } from "react";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const updateTodo = e => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		setTodoList([...todoList, todo]);
	};

	return (
		<div className="text-center mt-5">
			<p className="display-3 text-muted">
				<em>Todos</em>
			</p>
			<input onChange={updateTodo} />
			<button className="btn btn-light" onClick={addTodo}>
				Add
			</button>
			<p>
				{todoList.map(item => (
					<div>{item}</div>
				))}
			</p>
		</div>
	);
}
