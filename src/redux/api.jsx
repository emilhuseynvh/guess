import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const token = localStorage.getItem('token')

export const guessApi = createApi({
    reducerPath: 'guessApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerse.davidhtml.xyz/" }),
    tagTypes: ['Categories'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: () => ({
                url: '/auth/register',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password })
            })
        }),
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: `/login`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: { username, password }
            }),
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: '/categories/all'
            }),
            providesTags: ['Categories'],
        }),
        createCategory: builder.mutation({
            query: ({ name, slug }) => ({
                url: '/categories/create',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                method: 'POST',
                body: JSON.stringify({ name, slug })
            }),
            invalidatesTags: ['Categories'],
        }),
        deleteCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/categories/delete/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                method: 'DELETE',
            }),
            invalidatesTags: ['Categories'],
        }),
        getCategoryById: builder.mutation({
            query: (id) => ({
                url: `/categories/get/${id}`,
                method: 'GET'
            })
        }),
        updateCategory: builder.mutation({
            query: ({ id, name, slug }) => ({
                url: `/categories/update/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, slug })
            }),
            invalidatesTags: ['Categories'],
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetAllCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useGetCategoryByIdMutation,
    useUpdateCategoryMutation
} = guessApi
