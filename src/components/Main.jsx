import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <div className="temp-img-comp-wrapper mt-32">
        <div className="relative drop-shadow-2xl p-2">
          <div className="ring-2 ring-white rounded-full p-0.5">
            <img
              layout="fill"
              src={image}
              height={350}
              width={350}
              className="rounded-full"
              alt="Robert Servado Github PNG Picture"
              objectfit="cover"
            />
          </div>
        </div>
        <p className="text-center text-2xl font-normal">
          <a target="_blank" href="https://github.com/ArjayS">
            {name}
          </a>
        </p>
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Main;
