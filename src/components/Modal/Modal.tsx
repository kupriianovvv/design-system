import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { ReactNode, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";
import { store } from "../../store";

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpened, onClose, children }: ModalProps) => {
  const id = useId();

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
  }, [isOpened]);

  return createPortal(
      <div>
        <ModalOverlay isOpened={isOpened} onClose={realOnClose}/>
        <ModalContent isOpened={isOpened}>{children}</ModalContent>
      </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
};
