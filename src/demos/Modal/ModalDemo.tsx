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

const RandomContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <button onClick={onClose}>[x]</button>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed dolorem
        ea veritatis aperiam error voluptate, blanditiis, soluta sunt rem quam,
        at deserunt consequuntur vero! Alias veritatis officia earum ad? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eveniet, praesentium
        illum! Perferendis autem libero delectus rem odit veniam accusantium a
        hic, voluptate vitae ex dolor doloribus voluptatem alias, illum est!
      </div>
    </>
  );
};

export const ModalDemo = () => {
  const { isOpened, onOpen, onClose } = useModal();

  return (
    <>
      <button onClick={onOpen}>Open modal</button>
      <RandomText />
      <Modal isOpened={isOpened} onClose={onClose}>
        <RandomContent onClose={onClose} />
      </Modal>
    </>
  );
};
