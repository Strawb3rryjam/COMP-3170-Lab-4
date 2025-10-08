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
            <p>hii</p>
  
        </>
    );
}

export default Modal;
