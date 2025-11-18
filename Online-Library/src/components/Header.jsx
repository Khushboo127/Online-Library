import { Link } from "react-router-dom"
import "./Header.css"

// Navigation bar with links to Home, Browse Books, and Add Book
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <h1>BookHub</h1>
                </Link>
                <nav className="navbar">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/books" className="nav-link">
                        Browse Books
                    </Link>
                    <Link to="/add-book" className="nav-link">
                        Add Book
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
