import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from 'axios';
import { useEffect } from 'react';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

// GET
// 1st: 'posts/fetchPosts': prefix for generated action type
// 2nd: payload creator callback, return promise containing data
// or rejected promise with an error
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    try {
        const response = await axios.get(POSTS_URL);
        return [...response.data]; // just return response.data without spreading
    } catch (err) {
        return err.message;
    }
})

// POST
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    try {
        // initialPost: body
        const response = await axios.post(POSTS_URL, initialPost);
        return response.data;
    } catch (err) {
        return err.message;
    }
} )

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            // prepare callback // reducer에 대한 middleware
            // action.payload를 가공하여 reducer에 전달
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },
    },
    // builder: slice 밖에서 정의된 action에 대한 추가적인 리듀서를 정의하도록 한다.
    extraReducers(builder) {
        builder
          // thunk에서 반환한 promise의 상태에 따라 reducer 로직을 진행
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'; // boolean
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            let min = 1;
            // thunk에서 반환한 action.payload (fetched data)를 통해 state 변경 로직을 진행
            const loadedPosts = action.payload.map((post) => {
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
            post.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            };
            return post;
        });
            // Add any fetched posts to the array
            // still inside of slice
            state.posts = state.posts.concat(loadedPosts); // immer.js
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            action.payload.userId = Number(action.payload.userId);
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0,
            };
            console.log(action.payload);
            state.posts.push(action.payload);
        });
    },
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
