import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      {/*  */}
      <div className="bg-white rounded-full p-2 mt-3 cursor-pointer flex flex-row justify-between items-center w-full bg-opacity-50 backdrop-filter backdrop-blur-md max-w-screen-md hover:scale-125">
        <div className="bg-slate-200 rounded-full p-2 mr-1 bg-opacity-25"></div>
        <div className="flex justify-center w-10/12">
          <h3 className="text-lg font-medium ml-4">Sample Post Title!</h3>
        </div>
        <div className="bg-slate-200 rounded-full p-2 mr-1 bg-opacity-25">
          <form className="flex justify-around">
            <img
              src={require("../imgs/Copy_logo3.svg").default}
              alt="Copy Logo"
              type="submit"
              formAction=""
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
