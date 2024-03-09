import { useState } from "react";
import {
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useEditTodoMutation,
	useGetTodosQuery,
} from "../../redux/api/crud";
import scss from "./TodoList.module.scss";
const TodoList = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [inputValue1, setInputValue1] = useState<string>("");
	const [inputValue2, setInputValue2] = useState<string>("");
	const [isResult, setIsResult] = useState<number | null | boolean>(null);
	const { data, isLoading } = useGetTodosQuery();
	const [createTodo] = useCreateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();
	const [editTodo] = useEditTodoMutation();
	console.log(data);

	const addTodo = async () => {
		if (firstName.trim() === "" && lastName.trim() === "") {
			alert("Бир нерсе жазыныз!!!");
			return;
		} else {
			await createTodo({ firstName, lastName });
		}
	};

	async function deleteTodos(id: number) {
		await deleteTodo(id);
	}

	const putTodos = async (id: number, item: []) => {
		console.log(id);
		const itemPutMap = item.map((itemPut) => {
			if (itemPut._id === id) {
				return itemPut;
			}
		});
		return {
			firstName: inputValue1,
			lastName: inputValue2,
			_id: id,
		};
		// const itemPutResult = item.map((itemPut) => {
		// 	if(itemPut._id === id) {
		// 		return itemPut;
		// 	}
		// 	return {
		// 		firstName: inputValue1,
		// 		lastName: inputValue2,
		// 		_id: id
		// 	}
		// })

		const newData = {
			itemPutMap,
		};
		await editTodo(id, newData);
		setIsResult(false);
	};

	function EditItemId(id: number) {
		setIsResult(id);
	}

	// useEffect(() => {

	// const deleteTodo = async () => {};
	// }, [])

	return (
		<div>
			<input
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<input
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<button onClick={addTodo}>Add</button>
			{isLoading ? (
				<>
					<h1>Loading...</h1>
				</>
			) : (
				<>
					{data?.map((item) => (
						<div key={item._id}>
							{isResult === item._id ? (
								<>
									<input
										type="text"
										value={inputValue1}
										onChange={(e) => setInputValue1(e.target.value)}
									/>
									<input
										type="text"
										value={inputValue2}
										onChange={(e) => setInputValue2(e.target.value)}
									/>
									<button onClick={() => putTodos(item._id!, item)}>
										Save
									</button>
									<button onClick={() => setIsResult(null)}>Cancel</button>
								</>
							) : (
								<>
									<h1>{item.firstName}</h1>
									<p>{item.lastName}</p>
									<button onClick={() => deleteTodos(item._id!)}>delete</button>
									<button onClick={() => EditItemId(item._id!)}>Edit</button>
								</>
							)}
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default TodoList;
