import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpened, onClose, children }: ModalProps) => {
  if (!isOpened) return null;
  return (
    createPortal(<div>
      <ModalOverlay onClose={onClose}/>
      <ModalContent>{children}</ModalContent>
    </div>, document.getElementById('modal-root') as HTMLElement)
  );
};
