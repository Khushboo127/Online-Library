import { Link } from "react-router-dom"
import BookCard from "../components/BookCard.jsx";
import { useSelector } from "react-redux"
import "./Home.css"

// Home page with welcome message, categories, and popular books
function Home() {
    const books = useSelector((state) => state.books.books)
    const popularBooks = books.slice(0, 4) // Display first 4 books as popular
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Romance", "Biography"]

    return (
        <div className="home">
            {/* Welcome section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to BookHub</h1>
                    <p className="hero-description">Discover your next favorite book from our extensive collection</p>
                    <Link to="/books" className="cta-button">
                        Start Browsing
                    </Link>
                </div>
            </section>

            {/* Categories section */}
            <section className="categories-section">
                <h2>Browse by Category</h2>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <Link key={category} to={`/books/${category}`} className="category-card">
                            <h3>{category}</h3>
                            <p>{books.filter((b) => b.category === category).length} books</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular books section */}
            <section className="popular-section">
                <h2>Popular Books</h2>
                <div className="books-grid">
                    {popularBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
