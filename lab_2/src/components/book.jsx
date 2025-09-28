import "./Book.css";

function Book({ isbn13, image, price, title, url, onRemove }) {
  return (
    <div className="book">
      <button className="remove-btn" onClick={() => onRemove(isbn13)}>
        Remove
      </button>

      <img src={image} alt={title} />
      <p>
        <span className="book_desc">{price}</span>
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
    </div>
  );
}

export default Book;