import { ReactElement, RefObject } from "react";
import "./Tooltip.css";
import { useTooltip } from "./hooks/useTooltip";

type TooltipProps = {
  tooltipContent: string;
  renderElementToWrap: (
    ref: RefObject<HTMLDivElement>,
    onMouseEnter: () => void,
    onMouseLeave: () => void
  ) => ReactElement;
};

export const Tooltip = ({
  tooltipContent,
  renderElementToWrap,
}: TooltipProps) => {

  const {coords, isShowed, onMouseEnter, onMouseLeave, elementToWrapRef} = useTooltip();

  return (
    <>
      {(
        <article
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          className={`tooltip ${isShowed ? 'tooltip__visible' : ''}`.trim()}
        >
          {tooltipContent}
        </article>
      )}

      {renderElementToWrap(elementToWrapRef, onMouseEnter, onMouseLeave)}
    </>
  );
};
