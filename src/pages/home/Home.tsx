import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { init, mousemove, mouseout, resizeReset } from "../../helpers/myCanvas";
import "./home.scss";
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const appContainer: HTMLDivElement | null = appContainerRef.current;
    if (canvas && appContainer) {
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

      if (ctx) {
        init(canvas, ctx, appContainer);
      }
    }
  }, [canvasRef, appContainerRef]);
  return (
    <>
      <canvas ref={canvasRef} id="canvas"></canvas>
      <section
        ref={appContainerRef}
        onResize={() => {
          resizeReset(
            canvasRef.current as HTMLCanvasElement,
            appContainerRef.current as HTMLDivElement
          );
        }}
        onMouseMove={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          mousemove(event);
        }}
        onMouseOut={() => {
          mouseout();
        }}
        className="home"
        id="home"
      >
        <div className="home-text-wrapper">
          <h1>
            Hello, I'm Shimon
            <br />a Front End developer.
          </h1>
        </div>
        <div className="contact-me">
          <div className="contact-me-buttons-wrapper">
            <button>Hire me</button>
            <a href="">Download resume</a>
          </div>
          <div className="contact-me-socials-wrapper">
            <FaLinkedin size={32} />
            <FaGithub size={32} />
          </div>
        </div>
      </section>
    </>
  );
}
