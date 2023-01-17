import React from "react";

const Button = (props) => {
  const { id, site_name, site_link, site_logo } = props;
  return (
    <div className="mt-2 relative hover-trigger">
      <div className="bg-white rounded-full p-3 m-3 cursor-pointer bg-opacity-50 backdrop-filter backdrop-blur-md ring-neutral-100 hover:ring-2">
        <form className="flex justify-around">
          <button
            id={id}
            type="submit"
            formAction={site_link}
            className="h-12 w-12"
          >
            <img src={site_logo} alt={site_name} className="w-14" />
          </button>
        </form>
      </div>
      <div className="flex justify-center text-lg font-medium">
        <h1 className="absolute hover-target-slow">{site_name}</h1>
      </div>
    </div>
  );
};

export default Button;
