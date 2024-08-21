import {configureStore} from "@reduxjs/toolkit";
import {postsAPI} from "./postsAPI/postsAPI.js";
import modalsReducer from './slices/modalsSlice.js'

const store = configureStore({
    reducer: {
        [postsAPI.reducerPath]: postsAPI.reducer,
        modal: modalsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsAPI.middleware)
})

export default store;