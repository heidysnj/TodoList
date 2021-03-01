import React, { useState } from "react";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [trash, setTrash] = useState(false);
	let showArray = [];

	const updateTodo = e => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		setTodoList([...todoList, todo]);
		setTodo("");
	};

	function deleteTodo(arr, item) {
		const result = arr.filter((todoList, index) => {
			return index != item;
		});
		setTodoList(result);
	}

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
			{todoList.map((item, index) => (
				<div
					key={index}
					className="borderDown"
					onMouseEnter={() => setTrash(!trash)}
					onMouseLeave={() => setTrash(!trash)}
					onClick={() => deleteTodo(todoList, index)}>
					<div className="d-flex justify-content-start col">
						{item}
					</div>
					<div className="d-flex justify-content-end col">
						{!trash === false ? (
							<i className="fas fa-trash-alt"></i>
						) : (
							""
						)}
					</div>
				</div>
			))}
		</div>
	);
}
