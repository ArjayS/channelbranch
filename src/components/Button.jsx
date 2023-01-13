import React from "react";

const Button = (props) => {
  const { id, site_name, site_link, site_logo } = props;
  return (
    <div className="cursor-pointer">
      <form className="bg-white rounded-full flex p-3 mt-3 justify-around">
        <button id={id} type="submit" formAction={site_link}>
          <img src={site_logo} alt={site_name} className=" w-10" />
        </button>
      </form>
      <p>{site_name}</p>
    </div>
  );
};

export default Button;
