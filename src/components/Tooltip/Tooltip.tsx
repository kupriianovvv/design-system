import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.css";

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
  const [coords, setCoords] = useState({ x: 50, y: 200 });
  const [isShowed, setIsShowed] = useState(false);

  const onMouseEnter = () => {
    setIsShowed(true);
  };

  const onMouseLeave = () => {
    setIsShowed(false);
  };

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
      {isShowed && (
        <article
          style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
          id="tooltip"
          className={styles.tooltip}
        >
          {tooltipContent}
        </article>
      )}

      {renderElementToWrap(elementToWrapRef, onMouseEnter, onMouseLeave)}
    </>
  );
};
