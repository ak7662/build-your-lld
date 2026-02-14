const Modal = ({ children, isOpen, setIsOpen }: any) => {
    return (
        <div className="modal-container" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-body">
                <div className="modal-header">
                    <h1>Modal Header</h1>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
                </div>
                {children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    isOpen: false
}

export default Modal