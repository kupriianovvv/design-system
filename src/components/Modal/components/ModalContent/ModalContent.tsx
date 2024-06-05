import { ReactNode, useRef } from "react";
import "./ModalContent.css";
import { CSSTransition } from "react-transition-group";

type ModalContentProps = {
  children: ReactNode;
  isOpened: boolean;
};

export const ModalContent = ({ children, isOpened }: ModalContentProps) => {
  const nodeRef = useRef(null);
  return (
    <article ref={nodeRef} className="modal-content">
      {children}
    </article>
  );
};
