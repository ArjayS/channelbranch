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
    <div className="flex flex-col justify-center w-9/12">
      {/* OLD DESIGN */}
      {/* <form
        action="https://formsubmit.co/servadorobert@gmail.com"
        method="POST"
        className="mt-3"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form> */}
      {/* OLD DESIGN */}
      <form>
        <div className="flex flex-row items-between">
          <div>
            <label
              for="text"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-gray-300 pl-2 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="text"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 pl-2 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label for="text" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="message"
              id="message"
              className="block w-full rounded-md border-gray-300 pl-2 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Your Message"
              required
            />
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
