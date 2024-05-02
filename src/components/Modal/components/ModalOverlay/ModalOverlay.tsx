import './ModalOverlay.css'

type ModalOverlay = {
    onClose: () => void
}
export const ModalOverlay = ({ onClose }: ModalOverlay) => {
    return (
        <div onClick={onClose} className='modal-overlay'></div>
    )
}