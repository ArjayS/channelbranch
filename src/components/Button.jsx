import React from "react";

const Button = (props) => {
  const { id, site_name, site_description, site_link } = props;
  return (
    <form>
      <button id={id}>{site_name}</button>
    </form>
  );
};

export default Button;
