/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
	useDeleteTodoMutation,
	useEditTodoMutation,
	useGetTodosQuery,
} from "../../../redux/api/crud";
import scss from "./Cards.module.scss";
import Input from "../../Ul/input/Input";
import { Button } from "../../Ul/button/Button";
export const Cards = () => {
	const { data, isLoading } = useGetTodosQuery();
	const [deleteTodo] = useDeleteTodoMutation();
	const [editTodo] = useEditTodoMutation();
	const [inputValue1, setInputValue1] = useState<string>("");
	const [inputValue2, setInputValue2] = useState<string>("");
	const [isResult, setIsResult] = useState<number | null | boolean>(null);
	async function deleteTodos(_id: any) {
		await deleteTodo(_id).unwrap();
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
											<Input
												type="text"
												value={inputValue1}
												setData={setInputValue1}
												placeholder="название кино..."
											/>
											<Input
												type="text"
												value={inputValue2}
												setData={setInputValue2}
												placeholder="ссылка для фото..."
											/>
											<Button onClick={() => putTodos(item._id!)}>Save</Button>
											<Button onClick={() => setIsResult(null)}>Cancel</Button>
										</>
									) : (
										<>
											<img src={item.lastName} alt="logo" />
											<p>{item.firstName}</p>
											<Button onClick={() => deleteTodos(item._id!)}>
												delete
											</Button>
											<Button onClick={() => EditItemId(item._id!)}>
												Edit
											</Button>
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
