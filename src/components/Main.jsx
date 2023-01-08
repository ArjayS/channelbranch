import React from "react";
import Button from "./Button";

const socials = [
  {
    id: 1,
    sitename: "LinkedIN",
    link: "https://www.linkedin.com/in/robertservado/",
  },
  {
    id: 2,
    sitename: "Github",
    link: "https://github.com/ArjayS",
  },
];

const Main = () => {
  return (
    <div>
      <form>
        {socials.map((social) => {
          <Button
            key={social.id}
            sitename={social.sitename}
            link={social.link}
          />;
        })}
      </form>
    </div>
  );
};

export default Main;
