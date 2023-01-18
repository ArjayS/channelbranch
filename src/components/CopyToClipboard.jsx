import React, { useState } from "react";

const CopyToClipboard = (props) => {
  const {} = props;
  return (
    <>
      <div className="rounded-md hover:ring-2 ring-slate-400 mr-1 transform transition duration-100">
        <div className="rounded-full bg-opacity-75 hover-target-fast p-1">
          <form className="flex justify-around">
            <img
              src={require("../imgs/Copy_logo2.svg").default}
              alt="Copy Logo"
              type="submit"
              formAction=""
              className="h-4 w-4"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CopyToClipboard;
