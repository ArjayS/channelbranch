import React from "react";
import Button from "./Button";

const Main = () => {
  const socials = [
    {
      sitename: "LinkedIN",
      link: "https://www.linkedin.com/in/robertservado/",
    },
    {
      sitename: "Github",
      link: "https://github.com/ArjayS",
    },
  ];

  return (
    <div>
      {}
      <Button sitename="LinkedIN" link="https://www.youtube.com/" />
    </div>
  );
};

export default Main;
