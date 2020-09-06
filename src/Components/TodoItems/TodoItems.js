import React from "react";
import styles from "./TodoItems.module.css";
import Fade from "react-reveal/Fade";

export default function TodoItems(props) {
	let todoEntries = props.entries;

	const listItems = todoEntries.map((item, i) => {
		return (
			<Fade key={item.key} bottom collapse>
				<li onClick={() => props.delete(i)}>{item.task}</li>
			</Fade>
		);
	});

	return (
		<div>
			<ul className={styles.theList}>{listItems}</ul>
		</div>
	);
}
