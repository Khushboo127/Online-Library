import { Link } from "react-router-dom"
import "./BookCard.css"

// Component to display individual book information in card format
function BookCard({ book }) {
    console.log("BookCard coverImage:", book.coverImage);
    return (
        <div className="book-card">
            <div className="book-cover">
                <img src={book.coverImage} alt={book.title} />
            </div>
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-category">{book.category}</p>
                <div className="book-rating">
                    <span className="rating">{"⭐".repeat(book.rating)}</span>
                    <span className="rating-value">({book.rating}/5)</span>
                </div>
                <Link to={`/book/${book.id}`} className="view-details-btn">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default BookCard
