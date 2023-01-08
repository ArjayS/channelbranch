import React from "react";

const Button = (props) => {
  const { sitename, link } = props;
  return (
    <form>
      <button type="submit" formaction={link}>
        {sitename}
      </button>
    </form>
  );
};

export default Button;
