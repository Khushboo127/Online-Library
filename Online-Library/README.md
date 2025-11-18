# Github Profile: - https://github.com/Khushboo127/

# BookHub - Online Library System

A modern online library management system built with React, Vite, Redux Toolkit, and React Router. This application allows users to browse books by category, search for books, view book details, and add new books to the collection.

## Features

- **Home Page**: Browse categories and view popular books
- **Browse Books**: Filter books by category with dynamic routing (`/books/:category`)
- **Search Functionality**: Search books by title or author name
- **Book Details**: View comprehensive information about each book with dynamic routing (`/book/:id`)
- **Add Book**: Add new books with form validation using Redux state management
- **404 Page**: Elegant handling of undefined routes without header component
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS styling
- **Redux State Management**: Centralized book state management with Redux Toolkit

## Project Structure

src/
├── components/
│   ├── Header.jsx          # Navigation header component
│   ├── BookCard.jsx        # Reusable book card component
│   └── CategoryFilter.jsx  # Category filtering component
├── pages/
│   ├── Home.jsx            # Home page 
│   ├── BrowseBooks.jsx     # Browse and search books
│   ├── BookDetails.jsx     # Book details page 
│   ├── AddBook.jsx         # Add new book form 
│   └── NotFound.jsx        # 404 page 
├── store/
│   ├── store.js            # Redux store configuration
│   └── slices/
│       └── booksSlice.js   # Books reducer with addBook action
├── styles/
│   └── index.css           # Global styles
├── App.jsx                 # Main app component with routing
├── App.css                 # App-level styles
└── main.jsx                # React entry point


## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Run

1. **Extract the project files** (if provided as ZIP)

2. **Install dependencies**:
  
   npm install
  

3. **Start the development server**:
 
   npm run dev
 

4. **Open in browser**:
   - The app will typically run on `http://localhost:5173`
   - Open this URL in your web browser


## Component Highlights

### Redux Store
- **State**: Maintains a list of books and the next ID for new books
- **Actions**: `addBook` - Adds a new book to the collection
- **Benefits**: Centralized state management allows books to persist across page navigation

### Form Validation (AddBook Page)
- Title: Required, must not be empty
- Author: Required, must not be empty
- Description: Required, minimum 10 characters
- Error messages display for invalid fields
- Validation is triggered on form submission

### Dynamic Routing
- `/` - Home page
- `/books` - Browse all books
- `/books/:category` - Browse books by category
- `/book/:id` - View book details
- `/add-book` - Add new book
- `*` - 404 Not Found page

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Sidebar becomes grid layout on mobile
- Navigation bar adapts to smaller screens

## Key Features Explained

### 1. Home Page 
- ✓ Landing page with welcome message and book categories 
- ✓ Display popular books as cards with links to details 
- ✓ Navigation bar with Home, Browse Books, and Add Book links 

### 2. Browse Books Page (20 marks)
- ✓ Display books filtered by category 
- ✓ Dynamic routing by category using `/books/:category` 
- ✓ View Details link routes to Book Details page 
- ✓ Search functionality by title or author 

### 3. Book Details Page (15 marks)
- ✓ Dynamic route displaying book information (`/book/:id`) 
- ✓ Shows title, author, description, and rating 
- ✓ Back to Browse button/link for navigation 

### 4. Add Book Page (30 marks)
- ✓ Form for adding new books 
- ✓ Redux state management for books list 
- ✓ Redirect to Browse Books with new book displayed first
- ✓ Form validation for all fields 

### 5. 404 Page (5 marks)
- ✓ Page Not Found route for undefined paths 
- ✓ Displays the invalid URL and link back to Home 

### 6. Styling and UX (5 marks)
- ✓ Professional CSS styling with consistent design
- ✓ Smooth transitions and hover effects
- ✓ Mobile-responsive layout
- ✓ User-friendly interface with clear navigation

## Technologies Used

- **React**: UI library for building components
- **Vite**: Fast build tool and development server
- **React Router v7**: Client-side routing and navigation
- **Redux Toolkit**: State management solution
- **React-Redux**: Redux bindings for React
- **CSS3**: Styling with animations and responsive design


## Notes

- The application uses dummy data which is stored in Redux store during the session
- Data persists while the application is running but resets on page refresh (unless localStorage is implemented)
