import { useCallback, useRef, useState } from "react";
import { getTooltipCoords } from "../utils/getTooltipCoords";
import { Position } from "../types/position";

export const useTooltip = (position: Position) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const elementToWrapRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [isShowed, setIsShowed] = useState(false);

  const onMouseEnter = useCallback((event: React.MouseEvent) => {
    const child = event.target;
    const tooltip = tooltipRef.current;

    if (!child || !tooltip) {
      return;
    }
    if (!(child instanceof HTMLElement)) {
      return;
    }

    const { x, y } = getTooltipCoords({
      position,
      elementToWrap: child,
      tooltip,
    });
    setCoords({ x, y });

    setIsShowed(true);
  }, [position]);

  const onMouseLeave = useCallback(() => {
    setIsShowed(false);
  }, []);

  return {
    coords,
    isShowed,
    onMouseEnter,
    onMouseLeave,
    elementToWrapRef,
    tooltipRef,
  };
};
