import './ModalOverlay.css'

export const ModalOverlay = ({ onClose }) => {
    return (
        <div onClick={onClose} className='modal-overlay'></div>
    )
}