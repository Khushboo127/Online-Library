import { Link, useLocation } from "react-router-dom"
import "./NotFound.css"

// 404 Not Found page without header
function NotFound() {
    const location = useLocation()

    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Page Not Found</p>
                <p className="invalid-url">
                    The page at <code>{location.pathname}</code> does not exist.
                </p>
                <Link to="/" className="home-link">
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
