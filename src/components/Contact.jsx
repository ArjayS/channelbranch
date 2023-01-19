import React, { useState } from "react";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const [buttonSend, setButtonSend] = useState("Send");

  const [status, setStatus] = useState({});

  return (
    <div className="flex flex-col justify-center">
      <form
        action="https://formsubmit.co/servadorobert@gmail.com"
        method="POST"
        className="mt-3"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
