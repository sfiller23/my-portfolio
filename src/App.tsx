import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Theme from "./components/theme/Theme";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Home from "./containers/home/Home";
import Portfolio from "./containers/portfolio/Portfolio";
import Resume from "./containers/resume/Resume";
import Skills from "./containers/skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="App-navbar-wrapper">
        <NavBar />
      </div>
      <div className="App-main-content-wrapper">
        <Theme />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
