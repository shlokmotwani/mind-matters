import "../style/services.css";

export default function Services() {
  return (
    <div id="services" className="anchor">
      <h1>Services</h1>
      <div>
        <p>
          At Mind Matters, we offer supportive and practical coaching tailored
          to your needs. Whether you're working on your health, mindset, or
          overall life direction, we’re here to help you move forward with
          clarity and confidence.
        </p>

        <div id="services-grid">
          <div className="services-item">
            <p>
              <b>🧠 Health & Life Coaching Sessions</b>
            </p>
            <p>
              Work one-on-one with me to explore what’s holding you back, create
              healthy routines, and develop a positive mindset. For anyone ready
              to make lasting change — emotionally, physically, or both.{" "}
            </p>
          </div>
          <div className="services-item">
            <p>
              <b>🌱 Habit & Mindset Reset Program</b>
            </p>
            <p>
              A structured coaching program designed to help you break unhealthy
              patterns, build confidence, and form habits that stick. Ideal if
              you’ve tried “everything” and need a fresh, guided approach.
            </p>
          </div>
          <div className="services-item">
            <p>
              <b>💬 Free Discovery Call (15 mins)</b>
            </p>
            <p>
              Not sure what you need yet? Let’s talk. I’ll learn more about
              where you’re at, and you can see if coaching feels right for you —
              no pressure, no strings. Your first step starts here.
            </p>
          </div>
        </div>
      </div>
      <p>
        👉 <a href="#contact">Book your first session</a> — it’s easier than you
        think!
      </p>
    </div>
  );
}
