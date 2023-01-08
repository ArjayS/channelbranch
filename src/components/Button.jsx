import React from "react";

const Button = (props) => {
  const { sitename, link } = props;
  return (
    <button type="submit" formaction={link}>
      {sitename}
    </button>
  );
};

export default Button;
