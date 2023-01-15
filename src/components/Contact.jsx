import React from "react";

const Contact = () => {
  return (
    <>
      <form
        action="https://formsubmit.co/servadorobert@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Contact;
