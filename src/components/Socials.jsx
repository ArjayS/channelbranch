import React from "react";

const Button = (props) => {
  const { id, site_name, site_link, site_logo } = props;
  return (
    <div className="mt-2">
      <div className="bg-white rounded-full p-3 m-3 cursor-pointer ">
        <form className="flex justify-around">
          <button
            id={id}
            type="submit"
            formAction={site_link}
            className="h-8 w-8"
          >
            <img src={site_logo} alt={site_name} className=" w-8" />
          </button>
        </form>
      </div>
      <p>{site_name}</p>
    </div>
  );
};

export default Button;
