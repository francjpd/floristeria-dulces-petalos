import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_PRODUCT_API_URL

type Product = {
    id: string,
    name: string,
    binomialName: string,
    price: string,
    imgUrl: string,
    wateringsPerWeek: number,
    fertilizerType: 'nitrogen' | 'phosphorus',
    heightInCm: number
}

export const productApiSlice = createApi({
    reducerPath: 'products-api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<Product[], void>({
                query: () => '/product'
            }),
            fetchProductById: builder.query<Product, string>({
                query: (id) => `/product/${id}`
            })
        }
    }
})

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productApiSlice