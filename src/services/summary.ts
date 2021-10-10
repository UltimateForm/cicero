import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TermData } from "types";

export const summaryApi = createApi({
	reducerPath: "summaryApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API as string }),
	endpoints: (builder) => ({
		getTermData: builder.query<TermData, string>({
			query: (term) => {
				return `summary/${term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")}`;
			},
			keepUnusedDataFor: 3600
		})
	})
})

export const { useGetTermDataQuery } = summaryApi;