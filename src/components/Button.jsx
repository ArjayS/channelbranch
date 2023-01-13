import React from "react";

const Button = (props) => {
  const { id, site_name, site_description, site_link, site_logo } = props;
  return (
    <div className="bg-white rounded-full p-2 w-96 mt-3">
      <img src={site_logo} alt={site_name} />
      <form>
        <p>{site_name}</p>
        <button id={id} type="submit" formAction={site_link}>
          {site_description}
        </button>
      </form>
    </div>
  );
};

export default Button;
