import "./index.css";

import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';

import Add_Button from './components/Add_Button'; 
import Book from './components/book';


import books from './data/books.json';
import Modal from './components/Modal';
import BookForm from "./components/Book_Form";  


  
function renderBooks(book) {
  return <Book key={book.isbn13} {...book} />;
}


function App() {
  return (
    <div className="app"> 
      <section id="root">
        <AppHeader />
       <Main className="content">
          <Modal btnLabel="New" btnClassName="btn_primary">
              <BookForm />
          </Modal>
        <div className="book_group">
          {books.map(renderBooks)}
        </div>


      </Main>
      </section>
    <Footer />
    </div>
  )
}

function Tile({ label }) {
    function remove(e) {
        if (e.target === e.currentTarget) {
            return;
        }
        if (e.target.tagName !== "SPAN") {
            return;
        }
        e.currentTarget.remove();
    }

    return (
        <div
            className="tile"
            onClick={remove}
        >
            <p>{label}</p>
            <span>x</span>
        </div>
    );
}





export default App;




