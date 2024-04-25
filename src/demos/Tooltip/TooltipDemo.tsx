import { LegacyRef, forwardRef } from "react";
import { Tooltip } from "../../components/Tooltip/Tooltip";

const TestElement = forwardRef(
  (
    props: Record<string, unknown> & {
      onMouseEnter: () => void;
      onMouseLeave: () => void;
    },
    ref?: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
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
