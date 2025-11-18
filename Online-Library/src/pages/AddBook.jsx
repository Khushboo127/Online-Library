"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addBook } from "../store/slices/booksSlice"
import "./AddBook.css"

// Add book page with form for adding new books to the library
function AddBook() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "Fiction",
        description: "",
        rating: 5,
        cover: "https://via.placeholder.com/300x400?text=New+Book",
    })
    const [errors, setErrors] = useState({})

    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Romance", "Biography"]

    // Validate form data
    const validateForm = () => {
        const newErrors = {}

        if (!formData.title.trim()) {
            newErrors.title = "Title is required"
        }
        if (!formData.author.trim()) {
            newErrors.author = "Author is required"
        }
        if (!formData.description.trim()) {
            newErrors.description = "Description is required"
        }
        if (formData.description.trim().length < 10) {
            newErrors.description = "Description must be at least 10 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: name === "rating" ? Number.parseInt(value) : value,
        }))
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }))
        }
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        // Dispatch action to add book to Redux store
        dispatch(addBook(formData))

        // Redirect to browse books page
        navigate("/books")
    }

    return (
        <div className="add-book">
            <div className="form-container">
                <h1>Add a New Book</h1>

                <form onSubmit={handleSubmit} className="add-book-form">
                    {/* Title field */}
                    <div className="form-group">
                        <label htmlFor="title">Book Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter book title"
                            className={errors.title ? "input-error" : ""}
                        />
                        {errors.title && <span className="error-message">{errors.title}</span>}
                    </div>

                    {/* Author field */}
                    <div className="form-group">
                        <label htmlFor="author">Author *</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Enter author name"
                            className={errors.author ? "input-error" : ""}
                        />
                        {errors.author && <span className="error-message">{errors.author}</span>}
                    </div>

                    {/* Category field */}
                    <div className="form-group">
                        <label htmlFor="category">Category *</label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange}>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Description field */}
                    <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter book description (minimum 10 characters)"
                            rows="4"
                            className={errors.description ? "input-error" : ""}
                        />
                        {errors.description && <span className="error-message">{errors.description}</span>}
                    </div>

                    {/* Rating field */}
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            Add Book
                        </button>
                        <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBook
