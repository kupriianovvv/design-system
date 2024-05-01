import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { useModal } from "./hooks/useModal";
import { ReactNode } from "react";

type RenderContentArgs = {
  isOpened: boolean;
  onClose: () => void;
}

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  renderContent: ({
    isOpened,
    onClose,
  }: RenderContentArgs) => ReactNode
};

export const Modal = ({ isOpened, onClose, renderContent }: ModalProps) => {
  const content = renderContent({ onClose })
  if (!isOpened) return null;
  return (
    <div>
      <ModalOverlay onClose={onClose}/>
      <ModalContent content={content} />
    </div>
  );
};
