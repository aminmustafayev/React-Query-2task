import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = 'http://localhost:3000/'

export const movieAPI = createApi({
    reducerPath: "movieAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        //getAll
        getMovie: builder.query({
          query: () => `movies`
        }),
        getMoviess: builder.query({
            query: (id) => `movies/${id}`
        }),
        deleteMovies: builder.mutation({
            query: (id) => ({
                url: `movies/${id}`,
                method: "DELETE"
            })
        }),
        postMovies: builder.mutation({
            query: (newMovies) => ({
                url: "movies",
                body: newMovies,
                method: "POST"
            })
        }),
        patchMovies: builder.mutation({
            query: (id, updateMovies) => ({
                url: `movies/${id}`,
                body: updateMovies,
                method: "PATCH"
            })
        })
    })
})

export const { useGetMovieQuery, useGetMoviessQuery, useDeleteMoviesMutation, usePostMoviesMutation, usePatchMoviesMutation } = movieAPI