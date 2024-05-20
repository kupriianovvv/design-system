type OnClose = () => void;

type OnCloseItem = { id: string; onClose: OnClose };

class Store {
  private onCloseFuncs: OnCloseItem[] = [];
  push = ({ id, onClose }: { id: string; onClose: OnClose }) => {
    this.onCloseFuncs.push({ id, onClose })
  };
  pop = () => {
    return this.onCloseFuncs.pop();
  };
  delete = (id: string) => {
    this.onCloseFuncs = this.onCloseFuncs.filter(
      ({ id: onCloseId }) => onCloseId !== id,
    );
  };
  handleESC = () => {
    const onCloseItem = this.pop();
    if (onCloseItem) {
      onCloseItem.onClose();
    }
  };
  getOnCloseFuncs = () => {
    return this.onCloseFuncs;
  };
}

const store = new Store();

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    store.handleESC();
  }
});

export {store}
