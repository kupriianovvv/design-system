import { useCallback, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { useModal } from "../../components/Modal/hooks/useModal";

const RandomText = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam ipsa
      fugiat facilis hic aspernatur vero, harum ducimus in, facere voluptas
      reprehenderit odio est non inventore nobis numquam incidunt libero. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda
      error fugit saepe laboriosam explicabo repudiandae eum voluptates unde
      deleniti. Incidunt voluptas ratione autem sequi facilis praesentium cumque
      sed quia.
    </div>
  );
};

const renderContent = ({ onClose }) => {
  return (
    <div>
      <div>My cool content</div>
      <button onClick={onClose}>Close button</button>
    </div>
  );
};

export const ModalDemo = () => {
  const { isOpened, onOpen, onClose } = useModal();

  return (
    <>
      <button onClick={onOpen}>Open modal</button>
      <RandomText />
      <Modal isOpened={isOpened} onOpen={onOpen} onClose={onClose} renderContent={renderContent} />
    </>
  );
};
