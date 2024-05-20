import { ReactElement } from "react";
import "./Tooltip.css";
import { useTooltip } from "./hooks/useTooltip";
import { Position } from "./types/position";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

type TooltipProps = {
  position: Position;
  tooltipContent: string;
  children: (
    onMouseEnter: (event: React.MouseEvent) => void,
    onMouseLeave: () => void,
  ) => ReactElement;
};

export const Tooltip = ({
  position,
  tooltipContent,
  children,
}: TooltipProps) => {
  const { coords, isShowed, onMouseEnter, onMouseLeave, tooltipRef } =
    useTooltip(position);

  return (
    <div>
      {createPortal(
      <CSSTransition
        nodeRef={tooltipRef}
        in={isShowed}
        timeout={500}
        classNames="my-node"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <article
          id={"tooltip"}
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          className={"tooltip"}
          ref={tooltipRef}
        >
          {tooltipContent}
        </article>
      </CSSTransition>, document.getElementById("tooltip-root")!
      )}
      {children(onMouseEnter, onMouseLeave)}
    </div>
  );
};
