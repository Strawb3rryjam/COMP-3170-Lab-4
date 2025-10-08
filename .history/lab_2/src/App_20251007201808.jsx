import "./index.css";

import { useState } from "react";

import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';

import Book from './components/Books';   // capitalized file name
import Modal from './components/Modal';
import BookForm from "./components/Book_Form";  
import ActionButton from "./components/Action_Button";  

import initialBooks from './data/books.json';  // rename import to avoid clash with state


function App() {
  // State to hold the books (so we can remove them)
  const [books, setBooks] = useState(initialBooks);

  // Handler to remove a book by id
  const handleRemove = (isbn13) => {
    setBooks(books.filter((book) => book.isbn13 !== isbn13));
  };

  return (
    <div className="app"> 
      <section id="root">
        <AppHeader />
        <Main className="content">
          <Modal btnLabel="New" btnClassName="btn_primary">
            <BookForm />
          </Modal>

          <div>
            <ActionButton />
          </div>


          <div className="book_group">
            {books.map((book) => (
              <Book 
                key={book.isbn13} 
                {...book} 
                onRemove={handleRemove}  // pass remove handler
              />
            ))}
          </div>
        </Main>
      </section>
      <Footer />
    </div>
  )
}

export default App;