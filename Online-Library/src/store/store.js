import { configureStore } from "@reduxjs/toolkit"
import booksReducer from "./slices/booksSlice.js"

const store = configureStore({
    reducer: {
        books: booksReducer,
    },
})

export default store
