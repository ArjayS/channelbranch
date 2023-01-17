import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      <div className="bg-white rounded-full p-1 w-96 mt-3 cursor-pointer flex flex-row justify-evenly items-center">
        <h3>Sample Post Title!</h3>
        <div className="bg-slate-200 rounded-full p-2">
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
