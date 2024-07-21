import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISushi } from '../typesript/interfaces'

export const categoriesAPI = createApi({
    reducerPath: "categoriesAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    endpoints: (build) => ({
        fetchAllSushi: build.query<ISushi[], string>({
            query: () => ({
                url: '/categories',
            })
        })
    })
})