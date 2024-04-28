type FirstCoordinate = "left" | "top" | "bottom" | "right";
type SecondCoordinate = "start" | "center" | "end";

export type Position = `${FirstCoordinate}-${SecondCoordinate}`;
