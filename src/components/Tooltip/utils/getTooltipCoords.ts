import { Position } from "../types/position";

type GetTooltipCoords = {
  position: Position;
  elementToWrap: HTMLElement;
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
  } else if (position === "left-start") {
    const x = elementToWrapRect.x - tooltip.offsetWidth;
    const y = elementToWrapRect.y;
    return { x, y };
  } else if (position === "left-center") {
    const x = elementToWrapRect.x - tooltip.offsetWidth;
    const y =
      elementToWrapRect.y +
      elementToWrap.offsetHeight / 2 -
      tooltip.offsetHeight / 2;
    return { x, y };
  } else if (position === "left-end") {
    const x = elementToWrapRect.x - tooltip.offsetWidth;
    const y = elementToWrapRect.bottom - tooltip.offsetHeight;
    return { x, y };
  } else if (position === "bottom-start") {
    const x = elementToWrapRect.x;
    const y = elementToWrapRect.bottom;
    return { x, y };
  } else if (position === "bottom-center") {
    const x =
      elementToWrapRect.x +
      elementToWrap.offsetWidth / 2 -
      tooltip.offsetWidth / 2;
    const y = elementToWrapRect.bottom;
    return { x, y };
  } else if (position === "bottom-end") {
    const x = elementToWrapRect.right - tooltip.offsetWidth;
    const y = elementToWrapRect.bottom;
    return { x, y };
  } else if (position === "right-start") {
    const x = elementToWrapRect.right;
    const y = elementToWrapRect.y;
    return { x, y };
  } else if (position === "right-center") {
    const x = elementToWrapRect.right;
    const y =
      elementToWrapRect.y +
      elementToWrap.offsetHeight / 2 -
      tooltip.offsetHeight / 2;
    return { x, y };
  } else if (position === "right-end") {
    const x = elementToWrapRect.right;
    const y = elementToWrapRect.bottom - tooltip.offsetHeight;
    return { x, y };
  } else {
    throw new Error("position is incorrect");
  }
};

export { getTooltipCoords };
