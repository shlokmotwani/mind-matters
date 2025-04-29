import "../style/contact.css";

export default function Contact() {
  return (
    <div id="contact" className="anchor">
      <div id="contact-div">
        <h1>Contact Us</h1>
        <form action="" method="POST" id="contact-form">
          <div>
            <label htmlFor="name">Full Name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email Address: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="contact-number">Contact Number: </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              minLength="10"
              maxLength="10"
              name="contact-number"
              id="contact-number"
              required
            />
          </div>
          <div id="query-div">
            <textarea
              name="query"
              id="query"
              placeholder="Your queries (if any)"
            ></textarea>
          </div>
          <input type="submit" id="submit-btn" />
        </form>
      </div>
    </div>
  );
}
