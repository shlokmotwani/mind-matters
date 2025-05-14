import "../style/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home" className="anchor">
      <h1>"Empowering Your Mind, One Thought at a Time"</h1>
      <p>Guiding you to clarity, balance, and lasting change.</p>
      <div id="home-btn-div">
        <div>
          <a href="#about">Know More</a>
        </div>
        <div>
          <Link to="/meet-your-coach">Meet Your Coach</Link>
        </div>
      </div>
    </div>
  );
}
