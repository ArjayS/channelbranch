import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      <div className="bg-white rounded-full p-2 mt-3 cursor-pointer flex flex-row justify-between items-center w-full bg-opacity-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 backdrop-contrast-200 ring-neutral-100">
        <h3 className="text-lg font-medium ml-4">Sample Post Title!</h3>
        <div className="bg-slate-200 rounded-full p-2 mr-1">
          <form className="flex justify-around">
            <p></p>
            <img
              src={require("../imgs/Copy_logo1.svg").default}
              alt="Copy Logo"
              className="h-8 w-8"
            />
            <button id="" type="submit" formAction="">
              {title}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Posts;
