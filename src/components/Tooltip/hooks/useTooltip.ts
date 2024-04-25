import { useCallback, useEffect, useRef, useState } from "react";

export const useTooltip = () => {
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
      if (!elementToWrap) {
        return;
      }
      const elementToWrapRect = elementToWrap.getBoundingClientRect();
      setCoords({ x: elementToWrapRect.x, y: elementToWrapRect.y - 20 });
    }, []);


    return {coords, isShowed, onMouseEnter, onMouseLeave, elementToWrapRef}
}