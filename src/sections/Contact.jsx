import "../style/contact.css";
import { useNavigate } from "react-router-dom";
const POST_QUERY_URL = "http://localhost:3000/query";

export default function Contact() {
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const query = {
      fullName: form.fullName.value,
      email: form.email.value,
      contact: form.contact.value,
      message: form.message.value,
    };

    try {
      await fetch(POST_QUERY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });
      navigate("/success");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id="contact" className="anchor">
      <div id="contact-div">
        <h1>Contact Us</h1>
        <form onSubmit={onSubmit} id="contact-form">
          <div>
            <label htmlFor="name">Full Name: </label>
            <input type="text" name="fullName" id="fullName" required />
          </div>
          <div>
            <label htmlFor="email">Email Address: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="contact">Contact Number: </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              minLength="10"
              maxLength="10"
              name="contact"
              id="contact"
              required
            />
          </div>
          <div id="message-div">
            <textarea
              name="message"
              id="message"
              placeholder="Your queries (if any)"
            ></textarea>
          </div>
          <input type="submit" id="submit-btn" />
        </form>
      </div>
    </div>
  );
}
