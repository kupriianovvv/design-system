import { ReactElement } from "react";
import "./Tooltip.css";
import { useTooltip } from "./hooks/useTooltip";
import { Position } from "./types/position";

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

      {children(onMouseEnter, onMouseLeave)}
    </>
  );
};
