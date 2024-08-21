import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from '../../utils/api.js';

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => 'posts',
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        updatePost: builder.mutation({
            query: ({id, ...updatedPost}) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: updatedPost,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        deletePostById: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllPostsQuery,
    useLazyGetAllPostsQuery,
    useGetPostByIdQuery,
    useLazyGetPostByIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostByIdMutation,
} = postsAPI;