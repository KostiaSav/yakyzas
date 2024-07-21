import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISushi } from '../typesript/interfaces'

export const sushiAPI = createApi({
    reducerPath: "sushiAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    endpoints: (build) => ({
        fetchAllSushi: build.query<ISushi[], string>({
            query: (category) => ({
                url: `/sushies/${category ? "?_id_category=" + category : ""}`,
            }),
        })
    })
})