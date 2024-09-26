import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const token = localStorage.getItem('token')

export const guessApi = createApi({
    reducerPath: 'guessApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerse.apasni.me/" }),
    tagTypes: ['Categories', 'Products', 'Brands', 'Images', 'Cart'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ name, username, phone, gender, email, password }) => ({
                url: '/register',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, username, phone, gender, email, password })
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
            query: (id) => ({
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
        }),
        createSubCategory: builder.mutation({
            query: ({ name, slug, categoryId }) => ({
                url: '/categories/subcategory/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, slug, categoryId })
            }),
            invalidatesTags: ['Categories'],
        }),
        updateSubCategory: builder.mutation({
            query: ({ name, slug, id, categoryId }) => ({
                url: `/categories/subcategory/update/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug, categoryId }
            }),
            invalidatesTags: ['Category'],
        }),
        deleteSubCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/subcategory/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['SubCategory'],
        }),
        getAllBrands: builder.query({
            query: () => ({
                url: '/brands/all'
            }),
            providesTags: ['Brands']
        }),
        updateBrand: builder.mutation({
            query: ({ name, slug, id }) => ({
                url: `/brands/update/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Brands']
        }),
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/brands/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Brands']
        }),
        createBrand: builder.mutation({
            query: ({ name, slug }) => ({
                url: '/brands/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: ({ name, slug })
            }),
            invalidatesTags: ['Brands'],
        }),
        uploadImg: builder.mutation({
            query: (formData) => ({
                url: '/img/upload',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            }),
            invalidatesTags: ['Images'],
        }),
        getAllProduct: builder.query({
            query: () => ({
                url: '/products/all'
            }),
            providesTags: ['Products'],
        }),
        createProduct: builder.mutation({
            query: ({ name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size }) => ({
                url: '/products/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size })
            }),
            invalidatesTags: ['Products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ['Products'],
        }),
        getProductById: builder.mutation({
            query: (id) => ({
                url: `/products/get/${id}`,
                method: 'GET'
            })
        }),
        updateProduct: builder.mutation({
            query: ({ id, name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size }) => ({
                url: `/products/update/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: ({ name, description, discount, price, images, categoryId, subcategoryId, brandsId, colors, size })
            }),
            invalidatesTags: ['Products'],
        }),
        searchProducts: builder.query({
            query: (params) => ({
                url: `/products/all?${params}`
            }),
        }),
        getProductBySubcategoryId: builder.mutation({
            query: (subcategoryId) => ({
                url: `/products/subcategory/${subcategoryId}`,
                method: 'GET',
            })
        }),
        deleteImage: builder.mutation({
            query: (filename) => ({
                url: `/img/delete/${filename}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ['Images'],
        }),
        addToCart: builder.mutation({
            query: ({ productId, count, color, size }) => ({
                url: '/cart/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { productId, count, color, size }

            }),
            invalidatesTags: ['Cart']
        }),
        getCart: builder.query({
            query: () => ({
                url: '/cart/all',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            providesTags: ['Cart']
        }),
        deleteFromCart: builder.mutation({
            query: (itemId) => ({
                url: `/cart/delete/${itemId}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ['Cart']
        }),
        cartChange: builder.mutation({
            query: ({ productId, count }) => ({
                url: 'cart/change',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                method: 'PUT',
                body: ({ productId, count })
            }),
            invalidatesTags: ['Cart']
        }),
        updateUser: builder.mutation({
            query: (userData) => ({
                url: '/user/update',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: userData,
            }),
        }),
        searchProductByInput: builder.mutation({
            query: (value) => ({
                url: `/products/search?q=${value}`,
                method: 'GET'
            })
        })
    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetAllCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useGetCategoryByIdMutation,
    useUpdateCategoryMutation,
    useCreateSubCategoryMutation,
    useGetAllBrandsQuery,
    useUploadImgMutation,
    useCreateProductMutation,
    useGetAllProductQuery,
    useDeleteProductMutation,
    useGetProductByIdMutation,
    useUpdateProductMutation,
    useCreateBrandMutation,
    useUpdateBrandMutation,
    useDeleteBrandMutation,
    useUpdateSubCategoryMutation,
    useDeleteSubCategoryMutation,
    useDeleteImageMutation,
    useSearchProductsQuery,
    useGetProductBySubcategoryIdMutation,
    useAddToCartMutation,
    useGetCartQuery,
    useDeleteFromCartMutation,
    useCartChangeMutation,
    useUpdateUserMutation,
    useSearchProductByInputMutation
} = guessApi
