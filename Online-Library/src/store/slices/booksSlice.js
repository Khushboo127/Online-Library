import { createSlice } from "@reduxjs/toolkit"
import { booksData } from "../../data/booksData.js"

console.log("[v0] booksData imported length:", booksData.length)
console.log("[v0] First book data:", booksData[0])

const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: booksData,
        nextId: booksData.length + 1,
    },
    reducers: {
        // Reducer to add a new book to the state
        addBook: (state, action) => {
            const newBook = {
                ...action.payload,
                id: state.nextId,
            }
            state.books.unshift(newBook) // Add new book at the beginning
            state.nextId += 1
        },
    },
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
