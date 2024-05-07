import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { ReactNode, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { useOnCloseStore } from "../../store";

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpened, onClose, children }: ModalProps) => {
  const id = useId();
  const push = useOnCloseStore((store) => store.push);
  const onCloseFuncs = useOnCloseStore((store) => store.onCloseFuncs);
  const remove = useOnCloseStore((store) => store.delete);

  const realOnClose = () => {
    remove(id);
    onClose();
  };

  console.log(onCloseFuncs);
  useEffect(() => {
    if (!isOpened) {
      remove(id);
      return;
    }
    push({ id, onClose });
  }, [isOpened]);

  if (!isOpened) return null;
  return createPortal(
    <div>
      <ModalOverlay onClose={realOnClose} />
      <ModalContent>{children}</ModalContent>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
};
