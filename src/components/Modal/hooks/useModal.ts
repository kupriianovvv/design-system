import { useCallback, useState } from "react";

export const useModal = () => {
    const [isOpened, setIsOpened] = useState(true);
  
    const onOpen = useCallback(() => setIsOpened(true), []);
    const onClose = useCallback(() => setIsOpened(false), []);
  
    return { isOpened, onOpen, onClose };
  };