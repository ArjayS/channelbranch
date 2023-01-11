import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <header className="text-3xl">
        <div className="w-32 h-32 relative drop-shadow-2xl">
          <img
            layout="fill"
            src={image}
            className="rounded-full"
            alt="Robert Servado Github PNG Picture"
            objectfit="cover"
          />
        </div>
        <p className="text-center text-lg">
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
