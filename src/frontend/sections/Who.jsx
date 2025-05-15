import "../style/who.css";
import { Link } from "react-router-dom";

export default function Who() {
  return (
    <section id="who">
      <div id="who-left">
        <h3>Hi, I’m Sanskar, your Health & Life Coach at Mind Matters.</h3>
        <div>
          <p>
            I’m here to help you feel more confident, clear-minded, and in
            control of your life.
          </p>
          <p>
            I started Mind Matters because I’ve seen how powerful it is when
            people stop surviving and start thriving. With professional training
            and a deep passion for helping others, I guide my clients through
            the mental and emotional blocks that hold them back — whether it’s
            stress, self-doubt, unhealthy habits, or simply feeling stuck.
          </p>
          <p>
            My approach is calm, caring, and practical. Together, we work toward
            real change — not perfection, but progress. Because you deserve to
            feel good in your mind, your body, and your life.
          </p>
        </div>
        <Link to="/">Home</Link>
      </div>
      <div id="who-right">
        <img src={null} alt="" />
      </div>
    </section>
  );
}
