import React, { useState, useEffect } from "react";
import TodoItems from "../TodoItems/TodoItems";
import styles from "./TodoList.module.css";

export default function TodoList(props) {
	const [myTasks, setTasks] = useState([]);

	const addItem = (e) => {
		e.preventDefault();
		var myValue = e.target.addT.value;

		if (myValue !== "") {
			setTasks([
				...myTasks,
				{
					task: myValue,
					key: Date.now(),
				},
			]);
			e.target.addT.value = "";
		}
	};

	const deleteEntry = (index) => {
		setTasks([...myTasks.slice(0, index), ...myTasks.slice(index + 1)]);
	};

	useEffect(() => {
		console.log(myTasks);
	});

	return (
		<div className={styles.todoListMain}>
			<div className={styles.header}>
				<form onSubmit={addItem}>
					<input placeholder="Ingresar tarea" id="addT" />
					<button type="submit">Agregar</button>
				</form>
			</div>
			<TodoItems entries={myTasks} delete={deleteEntry} />
		</div>
	);
}
