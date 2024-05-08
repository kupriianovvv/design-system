import { ReactElement } from "react";
import "./Tooltip.css";
import { useTooltip } from "./hooks/useTooltip";
import { Position } from "./types/position";
import { Transition } from "@headlessui/react";

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
  console.log(isShowed)

  return (
    <>
      <Transition show={isShowed}>
        <article
          id={'tooltip'}
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          className={'tooltip'}
          ref={tooltipRef}
        >
          {tooltipContent}
        </article>
      </Transition>

      {children(onMouseEnter, onMouseLeave)}
    </>
  );
};
