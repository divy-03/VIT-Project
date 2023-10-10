// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  endpoints: (builder) => ({
    // Get Sorted Products
    getSortedProducts: builder.query({
      query: ({ sortBy, keyword, category }) => {
        const categoryParam = category ? `&category=${category}` : "";
        return `/products/sort/${sortBy}?keyword=${keyword}${categoryParam}`;
      },
    }),

    // Get Product Details
    getProDetails: builder.query({
      query: (id) => `/product/${id}`,
    }),

    // Create Product
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/product/new",
        method: "POST",
        body: product,
      }),
    }),

    // My All Listings
    getMyListings: builder.query({
      query: (user) => `/products/my/${user}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSortedProductsQuery,
  useGetProDetailsQuery,
  useCreateProductMutation,
  useGetMyListingsQuery,
} = productApi;
