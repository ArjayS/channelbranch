import React from "react";

const Button = (props) => {
  const { id, site_name, site_description, site_link } = props;
  return (
    <form>
      <button id={id} type="submit" formAction={site_link}>
        {site_description}
      </button>
    </form>
  );
};

export default Button;
