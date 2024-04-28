import { useCallback, useEffect, useRef, useState } from "react";
import { getTooltipCoords } from "../utils/getTooltipCoords";

export const useTooltip = () => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const elementToWrapRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [isShowed, setIsShowed] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsShowed(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsShowed(false);
  }, []);

  useEffect(() => {
    const elementToWrap = elementToWrapRef.current;
    const tooltip = tooltipRef.current;
    if (!elementToWrap || !tooltip) {
      return;
    }

    const { x, y } = getTooltipCoords({
      position: "left-start",
      elementToWrap,
      tooltip,
    });
    setCoords({ x, y });
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
