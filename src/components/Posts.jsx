import React from "react";

const Posts = (props) => {
  const { title } = props;
  return (
    <>
      <div className="bg-white rounded-full p-2 w-96 mt-3 cursor-pointer">
        <form className="flex justify-around">
          <p></p>
          <img src="" alt="" className="ml-3 w-10" />
          <button id="" type="submit" formAction="">
            {title}
          </button>
        </form>
      </div>
    </>
  );
};

export default Posts;
