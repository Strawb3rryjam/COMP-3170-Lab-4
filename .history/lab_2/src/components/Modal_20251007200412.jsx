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
            <p>EDIT</p>
            <p>DELETE</p>
        </>
    );
}

export default Modal;
