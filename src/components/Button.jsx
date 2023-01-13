import React from "react";

const Button = (props) => {
  const { id, site_name, site_link, site_logo } = props;
  return (
    <div className="bg-white rounded-full p-3 mt-3 cursor-pointer">
      <form className="flex justify-around">
        {/* <p>{site_name}</p> */}
        <button id={id} type="submit" formAction={site_link}>
          <img src={site_logo} alt={site_name} className=" w-10" />
        </button>
      </form>
    </div>
  );
};

export default Button;
