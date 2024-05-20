import { MouseEventHandler } from "react";
import { Tooltip } from "../../components/Tooltip/Tooltip";

type TestElementProps = {
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

const TestElement = ({ onMouseEnter, onMouseLeave }: TestElementProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
