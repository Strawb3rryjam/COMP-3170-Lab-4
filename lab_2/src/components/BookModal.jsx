import { useRef, useState } from "react";
import "./Book_Form.css";

function BookModal({ onAddBook }) {
    const modalRef = useRef();
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publisher: "",
        year: "",
        language: "",
        pages: "",
        image: "",
    });

    function openModal() {
        modalRef.current.showModal();
    }

    function closeModal() {
        modalRef.current.close();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (onAddBook) onAddBook(formData); // send data to App.jsx
        setFormData({
            title: "",
            author: "",
            publisher: "",
            year: "",
            language: "",
            pages: "",
            image: "",
        });
        closeModal();
    }

    return (
        <>

            <button onClick={openModal} className="book-header">+</button>

            <dialog ref={modalRef} className="book-modal">
                <div className="form-container">
                    <h2>Add Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label>Title</label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Book title..."
                                value={formData.title}
                                onChange={handleChange}
                                
                            />
                        </div>

                        <div className="form-control">
                            <label>Author</label>
                            <input
                                name="author"
                                type="text"
                                placeholder="Author"
                                value={formData.author}
                                onChange={handleChange}
                                
                            />
                        </div>

                         <div className="form-control">
                            <label>Publisher</label>
                            <input
                                name="publisher"
                                type="text"
                                placeholder="Publisher"
                                value={formData.publisher}
                                onChange={handleChange}
                            />
                        </div>


                         <div className="form-control">
                            <label>Publication Year</label>
                            <input
                                name="year"
                                type="number"
                                value={formData.year}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="form-control">
                            <label>Language</label>
                            <input
                                name="language"
                                type="text"
                                placeholder="Language"
                                value={formData.language}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label>Pages</label>
                            <input
                                name="pages"
                                type="number"
                                value={formData.pages}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label>URL (book cover) </label>
                            <input
                                name="image"
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-buttons">
                            <button type="submit" className="save_button">
                                Save
                            </button>
                            <button
                                type="button"
                                className="cancel_button"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default BookModal;
