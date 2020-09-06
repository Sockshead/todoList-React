import React from "react";
import styles from "./App.module.css";
import TodoList from "./Components/todoList/TodoList";

function App() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>React Todo List</h1>
			<TodoList />
		</div>
	);
}

export default App;
