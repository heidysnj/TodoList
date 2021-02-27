import React, { useState } from "react";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	let showArray = [];

	const updateTodo = e => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		setTodoList([...todoList, todo]);
		setTodo("");
	};

	const deleteTodo = index => {
		todoList.splice(index, 1);
		addTodo();
	};

	return (
		<div
			className="text-center mt-5"
			style={{ width: "30%", margin: "auto" }}>
			<p className="display-3 text-muted">
				<em>Todos</em>
			</p>
			<input onChange={updateTodo} value={todo} />
			<button className="btn btn-light" onClick={addTodo}>
				Add
			</button>
			<button className="btn btn-light" onClick={deleteTodo}>
				Delete
			</button>
			{todoList.map((item, index) => (
				<p key={index} className="border">
					{item}
				</p>
			))}
		</div>
	);
}
