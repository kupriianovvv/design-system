type OnClose = () => void;

type OnCloseItem = { id: string; onClose: OnClose };

class Store {
  private onCloseFuncs: OnCloseItem[] = [];
  push = ({ id, onClose }: { id: string; onClose: OnClose }) => {
    this.onCloseFuncs = this.onCloseFuncs.concat({ id, onClose });
  };
  pop = () => {
    this.onCloseFuncs = this.onCloseFuncs.slice(0, -1);
  };
  delete = (id: string) => {
    this.onCloseFuncs = this.onCloseFuncs.filter(
      ({ id: onCloseId }) => onCloseId !== id,
    );
  };
  handleESC = () => {
    const onCloseItem = this.onCloseFuncs.pop();
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
