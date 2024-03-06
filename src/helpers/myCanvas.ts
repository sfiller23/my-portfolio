// const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
// const ctx: CanvasRenderingContext2D | null = (
//   canvas as HTMLCanvasElement
// ).getContext("2d");

let w: number,
  h: number,
  balls: Ball[] = [];
const mouse: { x: number | undefined; y: number | undefined } = {
  x: undefined,
  y: undefined,
};
const rgb: string[] = [
  "rgb(26, 188, 156)",
  "rgb(46, 204, 113)",
  "rgb(52, 152, 219)",
  "rgb(155, 89, 182)",
  "rgb(241, 196, 15)",
  "rgb(230, 126, 34)",
  "rgb(231, 76, 60)",
];

export function init(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  container: HTMLDivElement
): number {
  resizeReset(canvas, container);
  const animationId = animationLoop(ctx);
  return animationId;
}

export function resizeReset(
  canvas: HTMLCanvasElement,
  container: HTMLDivElement
): void {
  w = canvas.width = container.clientWidth;
  h = canvas.height = container.clientHeight;
}

function animationLoop(ctx: CanvasRenderingContext2D): number {
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = "lighter";
  drawBalls(ctx);

  const temp: Ball[] = [];
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].time <= balls[i].ttl) {
      temp.push(balls[i]);
    }
  }
  balls = temp;

  const animationId = requestAnimationFrame(() => {
    animationLoop(ctx);
  });

  return animationId;
}

function drawBalls(ctx: CanvasRenderingContext2D): void {
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].draw(ctx);
  }
}

export function mousemove(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
): void {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  for (let i = 0; i < 3; i++) {
    balls.push(new Ball());
  }
}

export function mouseout(): void {
  mouse.x = undefined;
  mouse.y = undefined;
}

function getRandomInt(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

class Ball {
  start: { x: number; y: number; size: number };
  end: { x: number; y: number };
  x: number;
  y: number;
  size: number;
  style: string;
  time: number;
  ttl: number;

  constructor() {
    this.start = {
      x: mouse.x! + getRandomInt(-20, 20),
      y: mouse.y! + getRandomInt(-20, 20),
      size: getRandomInt(30, 40),
    };
    this.end = {
      x: this.start.x + getRandomInt(-300, 300),
      y: this.start.y + getRandomInt(-300, 300),
    };

    this.x = this.start.x;
    this.y = this.start.y;
    this.size = this.start.size;

    this.style = rgb[getRandomInt(0, rgb.length - 1)];

    this.time = 0;
    this.ttl = 120;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.style;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(): void {
    if (this.time <= this.ttl) {
      const progress = 1 - (this.ttl - this.time) / this.ttl;

      this.size = this.start.size * (1 - easeOutQuart(progress));
      this.x = this.x + (this.end.x - this.x) * 0.01;
      this.y = this.y + (this.end.y - this.y) * 0.01;
    }
    this.time++;
  }
}

// window.addEventListener("DOMContentLoaded", init);
// window.addEventListener("resize", resizeReset);
// window.addEventListener("mousemove", mousemove);
// window.addEventListener("mouseout", mouseout);
