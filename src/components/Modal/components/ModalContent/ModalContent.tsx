import { ReactNode } from "react";
import "./ModalContent.css";

type ModalContentProps = {
  children: ReactNode;
};

export const ModalContent = ({ children }: ModalContentProps) => {
  return <article className="modal-content">{children}</article>;
};
