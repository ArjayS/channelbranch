import React, { useState } from "react";

const CopyToClipboard = (props) => {
  const { url, copy_logo, copy_success } = props;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      setCopied(true);

      await navigator.clipboard.writeText(url);

      // console.log(url);

      setTimeout(() => {
        setCopied(false);
      }, 250);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <div className="rounded-md hover:ring-2 ring-slate-400 m-1 transform transition duration-100">
        <div className="rounded-full bg-opacity-75 h-9 w-9">
          {copied ? (
            <div className="p-1">{copy_success}</div>
          ) : (
            <button className="p-1" onClick={copyToClipboard}>
              {copy_logo}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CopyToClipboard;
