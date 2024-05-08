import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { ReactNode, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { useOnCloseStore } from "../../store";
import { Transition } from "@headlessui/react";

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

  return createPortal(
    <Transition
      show={isOpened}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>
        <ModalOverlay onClose={realOnClose} />
        <ModalContent>{children}</ModalContent>
      </div>
    </Transition>,
    document.getElementById("modal-root") as HTMLElement,
  );
};
