import { useEffect } from "react";
import { store } from "./store";
import { TooltipDemo } from "./demos/Tooltip/TooltipDemo";
import { ModalDemo } from "./demos/Modal/ModalDemo";

function App() {
  const handleESC = store.handleESC

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        handleESC();
      }
    });
  }, []);
  return (
    <>
      <TooltipDemo />
      <ModalDemo />
    </>
  );
}

export default App;
