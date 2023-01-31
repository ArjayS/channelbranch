import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center w-11/12 max-w-screen-md">
      <form
        action="https://formsubmit.co/servadorobert@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="A person wants to talk to you! wow! possible new oppurtunity! HECK YEA!"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thankyou"
        />
        <div className="flex flex-row justify-between mt-4">
          <div className="w-full mr-4">
            <div className="flex justify-between ml-4">
              <label
                for="text"
                className="block text-xl font-medium text-gray-700"
              >
                Name
              </label>
            </div>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-gray-300 pl-2 pr-2 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md mt-2"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          <div className="w-full ml-4">
            <div className="flex justify-between ml-4">
              <label
                for="text"
                className="block text-xl font-medium text-gray-700"
              >
                Email
              </label>
            </div>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 pl-2 pr-2 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md mt-2"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between ml-4">
            <label
              for="text"
              className="block text-xl font-medium text-gray-700 "
            >
              Message
            </label>
          </div>
          <div className="relative mt-1 rounded-md shadow-sm">
            <textarea
              type="text"
              name="message"
              id="message"
              className="block w-full rounded-md border-gray-300 pl-2 pr-2 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md mt-2"
              placeholder="Your Message"
              required
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 mx-52">
          <button
            type="submit"
            className="bg-white rounded-full p-3 cursor-pointer bg-opacity-50 backdrop-filter backdrop-blur-md ring-neutral-100 hover:ring-2 transform transition duration-250"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
