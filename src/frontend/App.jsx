import "./style/App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Services from "./sections/Services";
import USP from "./sections/USP";

function App() {
  return (
    <div id="main">
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
