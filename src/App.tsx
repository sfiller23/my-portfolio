import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Theme from "./components/theme/Theme";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

// Import the functions you need from the SDKs you need
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJx4frwAUgjG4rl-8x1nP87vp0Arfe86E",
  authDomain: "my-portfolio-87888.firebaseapp.com",
  projectId: "my-portfolio-87888",
  storageBucket: "my-portfolio-87888.firebasestorage.app",
  messagingSenderId: "200004698689",
  appId: "1:200004698689:web:272cfd67c750e47b9c7cc0",
  measurementId: "G-GXTHWEQFWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "unauthenticated user visited");

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
