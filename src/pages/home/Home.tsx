import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.scss";
export default function Home() {
  return (
    <section className="home" id="home">
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
  );
}
