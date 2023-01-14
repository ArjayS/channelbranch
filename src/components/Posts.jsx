import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      <div className="bg-white rounded-full p-2 w-96 mt-3 cursor-pointer">
        <form className="flex justify-around">
          <p></p>
          <img
            src={require("../imgs/Copy_logo1.svg").default}
            alt="Copy Logo"
            className="w-14"
          />
          <button id="" type="submit" formAction="">
            {title}
          </button>
        </form>
      </div>
    </>
  );
};

export default Posts;
