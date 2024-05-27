import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { getTooltipCoords } from "../utils/getTooltipCoords";
import { Position } from "../types/position";

export const useTooltip = (position: Position) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const elementToWrapRef = useRef<HTMLElement | null>(null);

  const [coords, setCoords] = useState({ x: -100, y: -100 });

  const [isShowed, setIsShowed] = useState(false);

  const onMouseEnter = useCallback(
    (event: React.MouseEvent) => {
      if (!(event.currentTarget instanceof HTMLElement)) return;
      elementToWrapRef.current = event.currentTarget;
      setIsShowed(true);
    },
    [],
  );

  useLayoutEffect(() => {
    const child = elementToWrapRef.current;
    const tooltip = document.getElementById("tooltip")!;
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
  }, [isShowed, position]);

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
