export type Point = {
  x: number;
  y: number;
}

export type Draw = {
  color: string,
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
}