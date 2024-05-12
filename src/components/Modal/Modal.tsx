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
  const onCloseFuncs = store.getOnCloseFuncs()

  console.log(onCloseFuncs)



  const realOnClose = () => {
    store.delete(id);
    onClose();
  };

  console.log(onCloseFuncs);
  useEffect(() => {
    if (!isOpened) {
      store.delete(id);
      return;
    }
    console.log({id, onClose})
    store.push({ id, onClose });
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
