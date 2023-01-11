import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <header className="temp-img-comp-wrapper mt-32">
        <div className="w-48 h-48 relative drop-shadow-2xl">
          <img
            layout="fill"
            src={image}
            className="rounded-full"
            alt="Robert Servado Github PNG Picture"
            objectfit="cover"
          />
        </div>
        <p className="text-center text-2xl font-normal">
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
