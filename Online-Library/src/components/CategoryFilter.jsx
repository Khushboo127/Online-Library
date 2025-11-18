import { Link } from "react-router-dom"
import "./CategoryFilter.css"

// Component to display book categories as filter options
function CategoryFilter({ selectedCategory }) {
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Romance", "Biography"]

    return (
        <div className="category-filter">
            <h3>Categories</h3>
            <div className="category-list">
                <Link to="/books" className={`category-item ${!selectedCategory ? "active" : ""}`}>
                    All Books
                </Link>
                {categories.map((category) => (
                    <Link
                        key={category}
                        to={`/books/${category}`}
                        className={`category-item ${selectedCategory === category ? "active" : ""}`}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryFilter
