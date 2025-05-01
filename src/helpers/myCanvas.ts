// Canvas dimensions and list of animated balls
let w: number,
  h: number,
  balls: Ball[] = [];

// Mouse position tracker
const mouse: { x: number | undefined; y: number | undefined } = {
  x: undefined,
  y: undefined,
};

// Predefined RGB color palette for the balls
const rgb: string[] = [
  "rgb(26, 188, 156)",
  "rgb(46, 204, 113)",
  "rgb(52, 152, 219)",
  "rgb(155, 89, 182)",
  "rgb(241, 196, 15)",
  "rgb(230, 126, 34)",
  "rgb(231, 76, 60)",
];

/**
 * Initializes the canvas, sets its size, and starts the animation loop.
 * @param canvas - The canvas element to draw on.
 * @param ctx - The 2D rendering context for the canvas.
 * @param container - The container element to match the canvas size.
 * @returns The animation frame ID.
 */
export function init(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  container: HTMLDivElement
): number {
  resizeReset(canvas, container);
  const animationId = animationLoop(ctx);
  return animationId;
}

/**
 * Resizes the canvas to match the dimensions of its container.
 * @param canvas - The canvas element to resize.
 * @param container - The container element to match the size.
 */
export function resizeReset(
  canvas: HTMLCanvasElement,
  container: HTMLDivElement
): void {
  w = canvas.width = container.clientWidth;
  h = canvas.height = container.clientHeight;
}

/**
 * The main animation loop that clears the canvas, updates, and draws the balls.
 * @param ctx - The 2D rendering context for the canvas.
 * @returns The animation frame ID.
 */
function animationLoop(ctx: CanvasRenderingContext2D): number {
  ctx.clearRect(0, 0, w, h); // Clear the canvas
  ctx.globalCompositeOperation = "lighter"; // Set blending mode
  drawBalls(ctx); // Draw all balls

  // Filter out expired balls
  const temp: Ball[] = [];
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].time <= balls[i].ttl) {
      temp.push(balls[i]);
    }
  }
  balls = temp;

  // Request the next animation frame
  const animationId = requestAnimationFrame(() => {
    animationLoop(ctx);
  });

  return animationId;
}

/**
 * Draws all the balls on the canvas.
 * @param ctx - The 2D rendering context for the canvas.
 */
function drawBalls(ctx: CanvasRenderingContext2D): void {
  for (let i = 0; i < balls.length; i++) {
    balls[i].update(); // Update ball properties
    balls[i].draw(ctx); // Draw the ball
  }
}

/**
 * Handles mouse movement events to track the mouse position
 * and create new balls at the mouse location.
 * @param e - The mouse event.
 */
export function mousemove(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
): void {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  // Add 3 new balls at the mouse position
  for (let i = 0; i < 3; i++) {
    balls.push(new Ball());
  }
}

/**
 * Handles mouse out events to reset the mouse position.
 */
export function mouseout(): void {
  mouse.x = undefined;
  mouse.y = undefined;
}

/**
 * Generates a random integer between the specified min and max values.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random integer.
 */
function getRandomInt(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

/**
 * Easing function for smooth animations.
 * @param x - The input value (progress).
 * @returns The eased output value.
 */
function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

/**
 * Represents a single animated ball.
 */
class Ball {
  start: { x: number; y: number; size: number }; // Starting position and size
  end: { x: number; y: number }; // Target position
  x: number; // Current x position
  y: number; // Current y position
  size: number; // Current size
  style: string; // Ball color
  time: number; // Elapsed time
  ttl: number; // Time to live (lifespan)

  constructor() {
    // Initialize ball properties
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
    this.ttl = 120; // Ball lifespan
  }

  /**
   * Draws the ball on the canvas.
   * @param ctx - The 2D rendering context for the canvas.
   */
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.style;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  /**
   * Updates the ball's position, size, and lifespan.
   */
  update(): void {
    if (this.time <= this.ttl) {
      const progress = 1 - (this.ttl - this.time) / this.ttl;

      // Gradually reduce size and move towards the target position
      this.size = this.start.size * (1 - easeOutQuart(progress));
      this.x = this.x + (this.end.x - this.x) * 0.01;
      this.y = this.y + (this.end.y - this.y) * 0.01;
    }
    this.time++;
  }
}
