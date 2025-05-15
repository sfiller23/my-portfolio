import { getAuth, signInAnonymously } from "firebase/auth";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { init, mousemove, mouseout, resizeReset } from "../../helpers/myCanvas";
import "./home.scss";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appContainerRef = useRef<HTMLDivElement>(null);

  const auth = getAuth();

  useEffect(() => {
    const signIn = async () => {
      //Anonymously sign in for the feedback request
      try {
        const res = await signInAnonymously(auth);
        localStorage.setItem("userId", res.user.uid);
      } catch (error) {
        console.error(error);
      }
    };
    signIn();
  }, [auth]);

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
            Hello, I'm Shimon.
            <br />a Front-End developer.
          </h1>
        </div>
        <div className="contact-me">
          <div className="contact-me-buttons-wrapper">
            <button
              onClick={() => {
                window.location.href = "mailto:shimonfiller@gmail.com";
              }}
            >
              Email me
            </button>
            <a href="/ProfileR.pdf" download="Shimon_Filler_Resume.pdf">
              Download resume
            </a>
            <Link to="/portfolio">My Portfolio</Link>
          </div>
          <div className="contact-me-socials-wrapper">
            <a
              className="sub-links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shimon-filler-514b76163/"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              className="sub-links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sfiller23"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
