import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { ReactNode, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { store } from "../../store";
import { CSSTransition } from "react-transition-group";
import './Modal.css'

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpened, onClose, children }: ModalProps) => {
  const id = useId();
  const modalRef = useRef(null);

  const realOnClose = () => {
    store.delete(id);
    onClose();
  };

  useEffect(() => {
    if (!isOpened) {
      return;
    }
    store.push({ id, onClose });

    return () => {
      store.delete(id);
    };
  }, [isOpened, id, onClose]);

  return createPortal(
    <CSSTransition
      nodeRef={modalRef}
      in={isOpened}
      timeout={1000}
      classNames="modal"
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <div ref={modalRef}>
        <ModalOverlay isOpened={isOpened} onClose={realOnClose} />
        <ModalContent isOpened={isOpened}>{children}</ModalContent>
      </div>
    </CSSTransition>,
    document.getElementById("modal-root") as HTMLElement,
  );
};
