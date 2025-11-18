"use client"

import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import BookCard from "../components/BookCard"
import CategoryFilter from "../components/CategoryFilter"
import "./BrowserBooks.css"

// Browse books page with filtering by category and search functionality
function BrowseBooks() {
    const { category } = useParams()
    const books = useSelector((state) => state.books.books)
    const [searchQuery, setSearchQuery] = useState("")

    // Filter books by category and search query
    const filteredBooks = useMemo(() => {
        let result = books

        // Filter by category if selected
        if (category) {
            result = result.filter((book) => book.category === category)
        }

        // Filter by search query (title or author)
        if (searchQuery) {
            result = result.filter(
                (book) =>
                    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchQuery.toLowerCase()),
            )
        }

        return result
    }, [books, category, searchQuery])

    return (
        <div className="browse-books">
            <div className="browse-container">
                {/* Sidebar with category filter */}
                <aside className="sidebar">
                    <CategoryFilter selectedCategory={category} />
                </aside>

                {/* Main content area */}
                <main className="content">
                    <div className="browse-header">
                        <h1>{category ? `${category} Books` : "All Books"}</h1>

                        {/* Search bar */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search by title or author..."
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Display filtered books */}
                    {filteredBooks.length > 0 ? (
                        <div className="books-grid">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>No books found matching your search.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}

export default BrowseBooks
