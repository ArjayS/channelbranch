import React from "react";

const Button = (props) => {
  const { id, site_name, site_description, site_link, site_logo } = props;
  return (
    <div className="bg-white rounded-full p-2 w-96 mt-3">
      <form>
        <button id={id} type="submit" formAction={site_link}>
          {site_description}
          <div>{site_name}</div>
          <img alt="Logo" src={site_logo} />
        </button>
      </form>
    </div>
  );
};

export default Button;
