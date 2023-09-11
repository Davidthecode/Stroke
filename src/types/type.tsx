export type Point = {
  x: number;
  y: number;
}

export type Draw = {
  color: string,
  // setColor: React.Dispatch<React.SetStateAction<string>>,
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
}