import { useEffect } from "react";
import { ModalDemo } from "./demos/Modal/ModalDemo";
import { useOnCloseStore } from "./store";

function App() {
  const handleESC = useOnCloseStore(store => store.handleESC);

  useEffect(() => {
    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        handleESC()
      }
    })
  }, [])
  return (
    <>
      <ModalDemo />
    </>
  );
}

export default App;
