import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Services from "./sections/Services";
import USP from "./USP";

function App() {
  return (
    <div id="main">
      <div id="nav_div">
        <nav>
          <ul>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </ul>
        </nav>
      </div>
      <div id="content_div">
        <Home />
        <About />
        <USP />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
