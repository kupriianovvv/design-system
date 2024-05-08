import { MouseEventHandler, useEffect } from "react";
import { Tooltip } from "../../components/Tooltip/Tooltip";

type TestElementProps = {
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

const TestElement = ({ onMouseEnter, onMouseLeave }: TestElementProps) => {
  useEffect(() => {
    document.getElementById('test').addEventListener("mouseenter", onMouseEnter);
    document.getElementById('test').addEventListener("mouseleave", onMouseLeave);
  }, [onMouseEnter, onMouseLeave]);
  return (
    <div
      id='test'
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "pink",
        marginLeft: "300px",
        marginTop: "500px",
      }}
    >
      testElement
    </div>
  );
};

const tooltipContent = "tooltip";

export const TooltipDemo = () => {
  return (
    <Tooltip position="right-end" tooltipContent={tooltipContent}>
      {(onMouseEnter, onMouseLeave) => {
        return (
          <TestElement
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        );
      }}
    </Tooltip>
  );
};
