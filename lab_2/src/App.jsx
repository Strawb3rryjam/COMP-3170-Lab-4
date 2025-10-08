import "./index.css";
import { useState } from "react";

import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';
import BookModal from './components/BookModal';

function App() {
  const [books, setBooks] = useState([]);

  // Add book with selected: false
  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, selected: false }]);
  };

  //  Select only one book at a time
  const handleSelectBook = (index) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) => ({
        ...book,
        selected: i === index ? !book.selected : false,
      }))
    );
  };

  //  Delete selected book
  const handleDeleteBook = () => {
    setBooks(books.filter((book) => !book.selected));
  };

  //  Placeholder update function
  const handleUpdateBook = () => {
    console.log("Update button clicked (no-op for now)");
  };

  return (
    <div className="app">
      <section id="root">
        <AppHeader />
        <Main className="content">
          <div className="actions">
            <BookModal onAddBook={handleAddBook} />
            <button className="btn secondary" onClick={handleUpdateBook}>
              Edit
            </button>
            <button className="btn danger" onClick={handleDeleteBook}>
              Delete
            </button>
          </div>

          <div className="book_group">
            {books.length === 0 ? (
              <p className="no-books">No books yet — add one!</p>
            ) : (
              books.map((book, index) => (
                <div
                  key={index}
                  className={`book-card ${book.selected ? "selected" : ""}`}
                  onClick={() => handleSelectBook(index)}
                >
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="book-image"
                    />
                  ) : (
                    <div className="book-image placeholder">📘</div>
                  )}

                  <p><strong>{book.title}</strong></p>
                  <p>by {book.author}</p>
                </div>
              ))
            )}
          </div>
        </Main>
        <Footer />
      </section>
    </div>
  );
}

export default App;
