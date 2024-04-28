type FirstCoordinate = "left" | "top" | "bottom" | "right";
type SecondCoordinate = "start" | "center" | "end";

export type Position = `${FirstCoordinate}-${SecondCoordinate}`;

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
  } 
  else {
    const x = elementToWrapRect.x;
    const y = elementToWrapRect.y - tooltip.offsetHeight;
    return { x, y}
  }
};


export { getTooltipCoords }