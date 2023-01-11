import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <header className="text-3xl">
        <p>{name}</p>
        <div className="w-32 h-32 relative">
          <img
            src={image}
            className="rounded-full"
            alt="Robert Servado Github PNG Picture"
          />
        </div>
        <p>{bio}</p>
      </header>
    </>
  );
};

export default Main;
