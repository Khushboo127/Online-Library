"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./BookDetails.css"

// Book details page with comprehensive information about selected book
function BookDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const books = useSelector((state) => state.books.books)

    // Find the book by ID
    const book = books.find((b) => b.id === Number.parseInt(id))

    if (!book) {
        return (
            <div className="book-details">
                <div className="book-not-found">
                    <h1>Book Not Found</h1>
                    <button onClick={() => navigate("/books")} className="back-btn">
                        Back to Browse
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="book-details">
            <button onClick={() => navigate(-1)} className="back-btn">
                ← Back to Browse
            </button>

            <div className="details-container">
                <div className="book-cover-large">
                    <img src={book.coverImage} alt={book.title} />
                </div>

                <div className="book-info-details">
                    <h1 className="detail-title">{book.title}</h1>
                    <p className="detail-author">by {book.author}</p>

                    <div className="detail-rating">
                        <span className="rating">{"⭐".repeat(book.rating)}</span>
                        <span className="rating-value">({book.rating}/5)</span>
                    </div>

                    <div className="detail-category">
                        <strong>Category:</strong> {book.category}
                    </div>

                    <div className="detail-description">
                        <h2>Description</h2>
                        <p>{book.description}</p>
                    </div>

                    <div className="action-buttons">
                        <button className="read-btn">Read Now</button>
                        <button className="bookmark-btn">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
