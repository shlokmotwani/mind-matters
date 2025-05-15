import { useState } from "react";
import "../style/contact.css";
import { useNavigate } from "react-router-dom";

const POST_QUERY_URL = import.meta.env.VITE_POST_QUERY_URL;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const form = event.target.elements;
    const query = {
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      contact: form.contact.value.trim(),
      message: form.message.value.trim(),
    };

    if (!query.fullName || !query.email || !query.contact || !query.message) {
      alert("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    try {
      let response = await fetch(POST_QUERY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });

      const data = await response.json();
      if (data.status == "success") {
        navigate("/success");
      } else {
        throw new Error("Submission failed. Please try again.");
      }
    } catch (error) {
      alert(
        "Something went wrong. Please check your connection or try again later."
      );
      console.error("Submission error", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="anchor">
      <div id="contact-div">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} id="contact-form">
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
              maxLength={300}
              placeholder="Your queries (if any)"
            ></textarea>
          </div>
          <input
            type="submit"
            id="submit-btn"
            disabled={loading}
            value={loading ? "Submitting..." : "Submit"}
          />
        </form>
      </div>
    </section>
  );
}
