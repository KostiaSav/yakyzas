import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment } from '../typesript/interfaces'

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    endpoints: (build) => ({
        fetchAllComments: build.query<IComment[], string>({
            query: (comment) => ({
                url: `/comments/${comment ? "?_id=" + comment : ""}`,
            }),
        })
    })

})