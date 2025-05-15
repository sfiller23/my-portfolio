import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Theme from "./components/theme/Theme";
import About from "./pages/about/About";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

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
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
