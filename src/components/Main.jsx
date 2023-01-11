import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <>
      <header className="text-3xl">
        <p>{name}</p>
        <img
          src={image}
          className="image-placeholder w-32 h-32 rounded-full"
          alt="Robert Servado Github PNG Picture"
        />
        <p>{bio}</p>
      </header>
    </>
  );
};

export default Main;
