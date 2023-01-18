import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      {/*  */}
      <div className="bg-white rounded-full p-1 mt-3 cursor-pointer flex flex-row justify-between items-center w-11/12 bg-opacity-50 backdrop-filter backdrop-blur-md max-w-screen-md hover:scale-110 hover-trigger transform transition duration-500">
        <div className="bg-slate-200 rounded-full bg-opacity-25"></div>
        <div className="flex justify-center">
          <h3 className="text-lg font-medium font-serif">Sample Post Title!</h3>
        </div>
        <div className="rounded-full hover:bg-slate-200 hover:ring-2 mr-1">
          <div className="rounded-full bg-opacity-75 hover-target-fast">
            <form className="flex justify-around">
              <img
                src={require("../imgs/Copy_logo3.svg").default}
                alt="Copy Logo"
                type="submit"
                formAction=""
                className="h-4 w-4"
              />
              {/* Might need to create a faster hover state on-show of copy-button and hide the dive that contains the backdrop currently seen here */}
              <button id="" type="submit" formAction="">
                {title}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
