import { ReactElement, RefObject } from "react";
import "./Tooltip.css";
import { useTooltip } from "./hooks/useTooltip";
import { Position } from "./types/position";

type TooltipProps = {
  position: Position;
  tooltipContent: string;
  children: (
    ref: RefObject<HTMLDivElement>,
    onMouseEnter: () => void,
    onMouseLeave: () => void
  ) => ReactElement;
};

export const Tooltip = ({
  position,
  tooltipContent,
  children,
}: TooltipProps) => {
  const {
    coords,
    isShowed,
    onMouseEnter,
    onMouseLeave,
    elementToWrapRef,
    tooltipRef,
  } = useTooltip(position);

  return (
    <>
      {
        <article
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          className={`tooltip ${isShowed ? "tooltip__visible" : ""}`.trim()}
          ref={tooltipRef}
        >
          {tooltipContent}
        </article>
      }

      {children(elementToWrapRef, onMouseEnter, onMouseLeave)}
    </>
  );
};
