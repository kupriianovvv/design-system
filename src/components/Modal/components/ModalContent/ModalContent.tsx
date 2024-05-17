import { ReactNode, useRef } from "react";
import "./ModalContent.css";
import { CSSTransition } from "react-transition-group";

type ModalContentProps = {
  children: ReactNode;
};

export const ModalContent = ({ children, isOpened }: ModalContentProps) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpened}
      timeout={500}
      classNames="my-nodef"
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <article ref={nodeRef} className="modal-content">{children}</article>
    </CSSTransition>
  );
};
