import React from "react";
import DayNightToggle from "./DayNightToggle";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <DayNightToggle />
      <header className="flex text-center flex-col items-center h-50 mt-2">
        <div className="ring-2 ring-white rounded-full p-1">
          <img
            src={image}
            height={200}
            width={200}
            className="rounded-full inline-block"
            alt="Robert Servado Github PNG Picture"
          />
        </div>
        <div className="ring-2 ring-white rounded-full p-0.5 mt-3">
          <h1 className="text-center text-2xl font-bold rounded-3xl bg-teal-800 text-white p-2 ring-1 ring-white">
            <a target="_blank" href="https://github.com/ArjayS">
              {name}
            </a>
          </h1>
        </div>
        <div className="mt-3">
          <p className="text-xl font-semibold">{bio}</p>
        </div>
      </header>
    </>
  );
};

export default Main;
