import { api as index } from "..";
import { CRUD } from "./types";
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getTodos: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["crud"],
		}),
		CreateTodo: builder.mutation<
			CRUD.CreateCrudResponse,
			CRUD.CreateCrudRequest
		>({
			query: ({ firstName, lastName }) => ({
				url: "",
				method: "POST",
				body: { firstName, lastName },
			}),
			invalidatesTags: ["crud"],
		}),
		DeleteTodo: builder.mutation<
			CRUD.DeleteCrudResponse,
			CRUD.DeleteCrudRequest
		>({
			query: (_id) => ({
				url: `${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["crud"],
		}),
		EditTodo: builder.mutation({
			query: ({ _id, newData }) => ({
				url: `${_id}`,
				method: "PATCH",
				body: newData,
			}),
			invalidatesTags: ["crud"],
		}),
	}),
});
export const {
	useGetTodosQuery,
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useEditTodoMutation,
} = api;
