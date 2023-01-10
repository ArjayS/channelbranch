import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <header>
        <p>{name}</p>
        <img
          src={image}
          className="max-w-full h-auto"
          alt="Robert Servado Github PNG Picture"
        />
        <p>{bio}</p>
      </header>
    </>
  );
};

export default Main;
