/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace CRUD {
	export type GetCrudRequest = void;
	export type GetCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];

	export type CreateCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	export type CreateCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];

	export type DeleteCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	export type DeleteCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];

	export type EditCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	export type EditCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
}
