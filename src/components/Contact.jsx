import React from "react";

const Contact = () => {
  return (
    <>
      <form
        action="https://formsubmit.co/servadorobert@gmail.com"
        method="POST"
      >
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Contact;
