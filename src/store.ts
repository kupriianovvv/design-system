import { create } from "zustand";

type OnClose = () => void;

type OnCloseItem = { id: string; onClose: OnClose };

type State = {
  onCloseFuncs: Array<OnCloseItem>;
};

type Actions = {
  push: (onCloseItem: OnCloseItem) => void;
  handleESC: () => void;
  pop: () => void;
  delete: (id: string) => void;
};

export const useOnCloseStore = create<State & Actions>()((set, get) => ({
  onCloseFuncs: [],
  push: ({ id, onClose }) => {
    set((state) => ({
      onCloseFuncs: state.onCloseFuncs.concat({ id, onClose }),
    }));
  },
  pop: () =>
    set((state) => ({ onCloseFuncs: state.onCloseFuncs.slice(0, -1) })),
  delete: (id: string) =>
    set((state) => ({
      onCloseFuncs: state.onCloseFuncs.filter(
        ({ id: onCloseId }) => onCloseId !== id,
      ),
    })),
  handleESC: () => {
    const onCloseItem = get().onCloseFuncs.pop();
    if (onCloseItem) {
      onCloseItem.onClose();
    }
  },
}));
