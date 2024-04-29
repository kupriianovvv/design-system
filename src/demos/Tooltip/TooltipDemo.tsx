import { LegacyRef, MouseEventHandler, forwardRef } from "react";
import { Tooltip } from "../../components/Tooltip/Tooltip";

type TestElementProps = {
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

const TestElement = forwardRef(
  (
    { onMouseEnter, onMouseLeave }: TestElementProps,
    ref?: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
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
  }
);

const tooltipContent = "tooltip";

export const TooltipDemo = () => {
  return (
    <Tooltip
      position="bottom-end"
      tooltipContent={tooltipContent}
      renderElementToWrap={(elementRef, onMouseEnter, onMouseLeave) => {
        return (
          <TestElement
            ref={elementRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        );
      }}
    ></Tooltip>
  );
};
