import { useRef } from "react";
import "./ModalOverlay.css";
import { CSSTransition } from "react-transition-group";

type ModalOverlayProps = {
  onClose: () => void;
  isOpened: boolean;
};
export const ModalOverlay = ({ onClose, isOpened }: ModalOverlayProps) => {
  console.log(isOpened);
  const nodeRef = useRef(null);
  return <div onClick={onClose} ref={nodeRef} className="modal-overlay"></div>;
};
