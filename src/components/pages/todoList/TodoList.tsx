import { useState } from "react";
import { useCreateTodoMutation } from "../../../redux/api/crud";
import scss from "./TodoList.module.scss";
import Input from "../../Ul/input/Input";
import { Button } from "../../Ul/button/Button";
const TodoList = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [createTodo] = useCreateTodoMutation();

	const addTodo = async () => {
		if (firstName.trim() === "" && lastName.trim() === "") {
			alert("Бир нерсе жазыныз!!!");
			return;
		} else {
			await createTodo({ firstName, lastName });
		}
	};

	return (
		<div className={scss.TodoList}>
			<div className="container">
				<div className={scss.content}>
					<h1>Movi List!</h1>
					<Input
						type="text"
						value={firstName}
						setData={setFirstName}
						placeholder="название кино..."
					/>
					<Input
						type="url"
						value={lastName}
						setData={setLastName}
						placeholder="ссылка для фото..."
					/>
					<Button onClick={addTodo}>Add</Button>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
