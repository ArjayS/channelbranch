import React from "react";

const Main = (props) => {
  const { name, image, bio } = props;
  return (
    <div>
      <header>
        <p>{name}</p>
        <p>{image}</p>
        <p>{bio}</p>
      </header>
    </div>
  );
};

export default Main;
