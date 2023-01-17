import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      {/*  */}
      <div className="bg-white rounded-full p-1 mt-3 cursor-pointer flex flex-row justify-between items-center w-full bg-opacity-50 backdrop-filter backdrop-blur-md max-w-screen-md hover:scale-105 hover-trigger">
        <div className="bg-slate-200 rounded-full p-1 ml-1 bg-opacity-25"></div>
        <div className="flex justify-center w-9/12">
          <h3 className="text-lg font-medium font-serif">Sample Post Title!</h3>
        </div>
        <div className="bg-slate-200 rounded-full p-1 mr-1 bg-opacity-25 hover-target-fast">
          <form className="flex justify-around">
            <img
              src={require("../imgs/Copy_logo3.svg").default}
              alt="Copy Logo"
              type="submit"
              formAction=""
              className="h-8 w-8"
            />
            {/* Might need to create a faster hover state on-show of copy-button and hide the dive that contains the backdrop currently seen here */}
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
