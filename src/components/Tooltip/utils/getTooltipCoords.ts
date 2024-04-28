import { Position } from "../types/position";

type GetTooltipCoords = {
  position: Position;
  elementToWrap: HTMLDivElement;
  tooltip: HTMLDivElement;
};

const getTooltipCoords = ({
  position,
  elementToWrap,
  tooltip,
}: GetTooltipCoords) => {
  const elementToWrapRect = elementToWrap.getBoundingClientRect();

  if (position === "top-start") {
    const x = elementToWrapRect.x;
    const y = elementToWrapRect.y - tooltip.offsetHeight;
    return { x, y };
  } else if (position === "top-center") {
    const x =
      elementToWrapRect.x +
      elementToWrap.offsetWidth / 2 -
      tooltip.offsetWidth / 2;
    const y = elementToWrapRect.y - tooltip.offsetHeight;
    return { x, y };
  } else if (position === "top-end") {
    const x = elementToWrapRect.right - tooltip.offsetWidth;
    const y = elementToWrapRect.y - tooltip.offsetHeight;
    return { x, y };
  } else {
    const x = elementToWrapRect.x;
    const y = elementToWrapRect.y - tooltip.offsetHeight;
    return { x, y };
  }
};

export { getTooltipCoords };
