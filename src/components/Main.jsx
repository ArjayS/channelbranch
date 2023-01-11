import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <header className="text-3xl">
        <div className="w-32 h-32 relative">
          <img
            src={image}
            className="rounded-full"
            alt="Robert Servado Github PNG Picture"
          />
        </div>
        <p>
          <a target="_blank" href="https://github.com/ArjayS">
            {name}
          </a>
        </p>
        <p>{bio}</p>
      </header>
    </>
  );
};

export default Main;
