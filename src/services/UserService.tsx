import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../typesript/interfaces'

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], string>({
            query: (id) => ({
                url: `/users/${id ? "?id=" + id : ""}`,
            }),
        })
    })

})