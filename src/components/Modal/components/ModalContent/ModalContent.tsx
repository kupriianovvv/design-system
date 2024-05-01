import './ModalContent.css'

export const ModalContent = ({onClose, content}) => {

    return (
        <article className='modal-content'>
            {content}
        </article>
    )
}