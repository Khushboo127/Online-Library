// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowserBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* All normal pages use the Layout (which includes Header + <Outlet />) */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<BrowseBooks />} />
            <Route path="books/:category" element={<BrowseBooks />} />
            <Route path="book/:id" element={<BookDetails />} />
            <Route path="add-book" element={<AddBook />} />
          </Route>

          {/* 404: this is outside the Layout so Header is NOT shown for NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
