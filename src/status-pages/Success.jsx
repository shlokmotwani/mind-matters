import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [secondsLeft, setSecondsLeft] = useState(7);
  const navigate = useNavigate();

  if (secondsLeft <= 0) {
    navigate("/");
  }

  setTimeout(() => {
    if (secondsLeft > 0) {
      setSecondsLeft(secondsLeft - 1);
    }
  }, 1000);
  return (
    <div>
      <h2>Thank you!</h2>
      <p>Our team will get in touch with you shortly.</p>
      <p>Taking you to the Home page in {secondsLeft} seconds</p>
    </div>
  );
}
