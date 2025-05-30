import "../style/usp.css";
import supportImage from "../../../assets/support.png";
import certifiedImage from "../../../assets/certified.png";
import progressImage from "../../../assets/progress.png";
import hugImage from "../../../assets/hug.png";
import hassleFreeImage from "../../../assets/okay-done.png";

export default function USP() {
  return (
    <section id="usp">
      <h1>Why Choose Us?</h1>
      <div>
        <div>
          <img src={supportImage} alt="" />
          <p>
            <b>Personalized Support</b>
          </p>
          <p>
            No one-size-fits-all here. We listen deeply and tailor every session
            to you and your goals.
          </p>
        </div>

        <div>
          <img src={certifiedImage} alt="" />
          <p>
            <b>Certified, Caring Coach</b>
          </p>{" "}
          <p>
            Work with someone who’s professionally trained and genuinely
            invested in your growth.
          </p>
        </div>

        <div>
          <img src={progressImage} alt="" />
          <p>
            <b>Practical Tools, Real Results</b>
          </p>
          <p>
            Walk away with tools you can use daily to improve your mindset and
            well-being.
          </p>
        </div>

        <div>
          <img src={hugImage} alt="" />
          <p>
            <b>Safe, Non-Judgmental Space</b>
          </p>
          <p>
            This is your place to be heard, understood, and guided without
            pressure.
          </p>
        </div>

        <div>
          <img src={hassleFreeImage} alt="" />
          <p>
            <b>Easy Booking & Support</b>
          </p>
          <p>
            It only takes a minute to take your first step. We make this simple
            and stress-free.
          </p>
        </div>
      </div>
    </section>
  );
}
