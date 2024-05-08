import { useEffect } from "react";
import { useOnCloseStore } from "./store";
import { TooltipDemo } from "./demos/Tooltip/TooltipDemo";
import { ModalDemo } from "./demos/Modal/ModalDemo";

function App() {
  const handleESC = useOnCloseStore((store) => store.handleESC);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        handleESC();
      }
    });
  }, []);
  return (
    <>
      <ModalDemo />
    </>
  );
}

export default App;
