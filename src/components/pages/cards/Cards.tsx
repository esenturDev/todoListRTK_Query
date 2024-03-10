import { useState } from "react";
import {
	useDeleteTodoMutation,
	useEditTodoMutation,
	useGetTodosQuery,
} from "../../../redux/api/crud";
import scss from "./Cards.module.scss";
export const Cards = () => {
	const { data, isLoading } = useGetTodosQuery();
	const [deleteTodo] = useDeleteTodoMutation();
	const [editTodo] = useEditTodoMutation();
	const [inputValue1, setInputValue1] = useState<string>("");
	const [inputValue2, setInputValue2] = useState<string>("");
	const [isResult, setIsResult] = useState<number | null | boolean>(null);
	async function deleteTodos(id: number) {
		await deleteTodo(id);
	}
	const putTodos = async (_id: number) => {
		const newData = {
			firstName: inputValue1,
			lastName: inputValue2,
		};
		if (inputValue1.trim() === "" && inputValue2.trim() === "") {
			alert("Бир нерсе жазыныз input ка!!!");
		} else {
			editTodo({ _id, newData });
			setIsResult(null);
		}
	};

	function EditItemId(id: number) {
		setIsResult(id);
	}

	return (
		<div className={scss.Cards}>
			<div className="container">
				<div className={scss.content}>
					{isLoading ? (
						<>
							<h1>Loading...</h1>
						</>
					) : (
						<>
							{data?.map((item) => (
								<div className={scss.card} key={item._id}>
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
											<button onClick={() => putTodos(item._id!)}>Save</button>
											<button onClick={() => setIsResult(null)}>Cancel</button>
										</>
									) : (
										<>
											<img src={item.lastName} alt="logo" />
											<p>{item.firstName}</p>
											<button onClick={() => deleteTodos(item._id!)}>
												delete
											</button>
											<button onClick={() => EditItemId(item._id!)}>
												Edit
											</button>
										</>
									)}
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
