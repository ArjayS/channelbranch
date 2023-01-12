import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      {/* <header className="temp-img-comp-wrapper mt-32"> */}
      <header className="flex text-center flex-col items-center mt-5">
        {/* <div> */}
        <div className="ring-2 ring-white rounded-full p-0.5">
          {/* <div> */}
          <img
            src={image}
            height={300}
            width={300}
            className="rounded-full inline-block"
            alt="Robert Servado Github PNG Picture"
          />
        </div>
        <h1 className="text-center text-2xl font-bold rounded-3xl bg-teal-800 text-white p-2 ring-1 ring-white mt-3">
          <a target="_blank" href="https://github.com/ArjayS">
            {name}
          </a>
        </h1>
        <div className="mt-3">
          <p className="text-xl font-semibold">{bio}</p>
        </div>
      </header>
    </>
  );
};

export default Main;
