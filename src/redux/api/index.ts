import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BEKENT_URL,
});
const baseQueryExtented: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtented,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ["crud"],
  endpoints: () => ({}),
});