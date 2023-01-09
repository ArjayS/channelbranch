import React from "react";
import Button from "./Button";

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
