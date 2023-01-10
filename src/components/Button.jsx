import React from "react";

const Button = (props) => {
  const { id, site_name, site_description, site_link, site_logo } = props;
  return (
    <form>
      <button id={id} type="submit" formAction={site_link}>
        {site_description}
        <div>{site_name}</div>
      </button>
    </form>
  );
};

export default Button;
