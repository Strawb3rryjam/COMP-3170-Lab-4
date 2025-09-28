import "../index.css";

function BookForm() {
    return (
        <div className="form-container">
            <h2>New Book</h2>
            <form>
                <div className="form-control">
                    <label>Title</label>
                    <input
                        name="pr-name"
                        type="text"
                        placeholder="book title..."
                    />
                </div>
                <div className="form-control">
                    <label>Author</label>
                    <input
                        name="pr-desc"
                        type="text"
                        placeholder="Author"
                    />
                </div>
                <div className="form-control">
                    <label>Publisher</label>
                    <input
                        name="pr-desc"
                        type="text"
                        placeholder="Publisher"
                    />
                </div>
                <div className="form-control">
                    <label>Publication Year</label>
                    <input name="pr-price" type="number" />
                </div>
                <div className="form-control">
                    <label>Language</label>
                    <input
                        name="pr-desc"
                        type="text"
                        placeholder="Language"
                    />
                </div>
                    <div className="form-control">
                    <label>Pages</label>
                    <input name="pr-price" type="number" />
                </div>
                <button className="btn primary">Save</button>
            </form>
        </div>
    );
}

export default BookForm;