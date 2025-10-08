import { useRef } from "react";

function Modal({ btnLabel, btnClassName, children }) {
    const modalRef = useRef();

    function openModal() {
        modalRef.current.showModal();
    }

    return (
        <>
            <button onClick={openModal} className={btnClassName}>
                {btnLabel}
            </button>
            <dialog ref={modalRef}>{children}</dialog>
            <div>
                <p>EDIT</p>
            </div>
            <div>
                <p>DELETE</p>
            </div>
        </>
    );
}

export default Modal;
