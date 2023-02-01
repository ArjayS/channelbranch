import React from "react";
import CopyToClipboard from "./CopyToClipboard";

const Posts = (props) => {
  const { id, website, logo, title, url } = props;
  return (
    <>
      <div
        id={id}
        className="bg-white rounded-lg p-1 mt-3 cursor-pointer flex flex-row justify-between items-center w-11/12 bg-opacity-50 backdrop-filter backdrop-blur-md max-w-screen-md hover:scale-110 hover-trigger transform transition duration-300"
      >
        <div className="bg-slate-200 rounded-full bg-opacity-25 ml-1">
          <img src={logo} alt={website} className="h-8 w-8" />
        </div>
        <div className="flex justify-center items-center">
          <form>
            <button id="" type="submit" formAction={url} className="">
              <h3 className="text-lg font-medium font-serif">{title}</h3>
            </button>
          </form>
        </div>
        <div className="hover-target-fast">
          <CopyToClipboard
            url={url}
            svg_logo_1={
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M17.5 12C20.5376 12 23 14.4624 23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12ZM5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L11.7348 20.5051C12.0227 21.0561 12.3872 21.5608 12.8142 22.0048L8.75 22.0042C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM18.2843 14.5886C18.1138 14.4705 17.8862 14.4705 17.7157 14.5886L17.6464 14.6464L17.5886 14.7157C17.4705 14.8862 17.4705 15.1138 17.5886 15.2843L17.6464 15.3536L19.2917 16.999L14.4937 17L14.4038 17.0081C14.1997 17.0451 14.0388 17.206 14.0018 17.4101L13.9937 17.5L14.0018 17.5899C14.0388 17.794 14.1997 17.9549 14.4038 17.9919L14.4937 18L19.2937 17.999L17.6464 19.6464L17.5886 19.7157C17.4536 19.9106 17.4729 20.18 17.6464 20.3536C17.82 20.5271 18.0894 20.5464 18.2843 20.4114L18.3536 20.3536L20.8832 17.8212L20.9202 17.7711L20.9622 17.691L20.9882 17.6083L20.9981 17.5444V17.4557L20.9883 17.392L20.9767 17.3488L20.9445 17.2708L20.9205 17.2293L20.8832 17.1788L18.3536 14.6464L18.2843 14.5886ZM17.75 2C18.9926 2 20 3.00736 20 4.25L20.0006 11.4984C19.5265 11.3007 19.024 11.1574 18.5009 11.0766L18.5 4.25C18.5 3.83579 18.1642 3.5 17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18L11.019 18.0003C11.0585 18.5198 11.1591 19.0222 11.3136 19.5004L8.75 19.5C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75Z"
                  fill="#212121"
                />
              </svg>
            }
          />
        </div>
        {/*
        rounded-md hover:ring-2 ring-slate-400 mr-1 transform transition duration-100">
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
*/}
      </div>
    </>
  );
};

export default Posts;
