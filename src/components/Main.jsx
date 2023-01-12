import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      {/* <header className="temp-img-comp-wrapper mt-32"> */}
      <header className="mt-3 text-center">
        {/* <div className="relative drop-shadow-2xl p-2"> */}
        <div>
          {/* <div className="ring-2 ring-white rounded-full p-0.5"> */}
          <div>
            <img
              src={image}
              height={350}
              width={350}
              className="rounded-full"
              alt="Robert Servado Github PNG Picture"
            />
          </div>
        </div>
        <h1 className="text-center text-2xl font-normal">
          <a target="_blank" href="https://github.com/ArjayS">
            {name}
          </a>
        </h1>
        <p>{bio}</p>
      </header>
    </>
  );
};

export default Main;
