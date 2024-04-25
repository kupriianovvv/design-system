import { ReactElement, RefObject, useCallback, useEffect, useRef, useState } from "react";
import "./Tooltip.css";

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
  return (
    <>
      {(
        <article
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          id="tooltip"
          className={`tooltip ${isShowed ? 'tooltip__visible' : ''} `}
        >
          {tooltipContent}
        </article>
      )}

      {renderElementToWrap(elementToWrapRef, onMouseEnter, onMouseLeave)}
    </>
  );
};
