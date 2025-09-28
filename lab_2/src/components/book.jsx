import "./Book.css";

function Book({ image, price, title, url }) {
  return (
    <div className="book">
      <img src={image} alt={title} />
      <p>
        <span className="book_desc">{price}</span>
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
}

export default Book;
