import React, { useState, useEffect } from "react";

const DayNightToggle = (props) => {
  const { onChange, checked } = props;
  // const [theme, setTheme] = useState(null);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <>
      {/* <div className="h-screen bg-white dark:bg-black flex justify-center items-center"> */}
      <div className="m-0 h-10 w-screen flex flex-col justify-center items-center">
        {/* <button
          className="bg-green-200 p-4 rounded-3xl"
          onClick={handleThemeSwitch}
        >
          DayNightToggle
        </button> */}
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className="dn-input"
          id="darkmode-toggle"
        />
        <label className="dn-toggle" for="darkmode-toggle"></label>
      </div>
    </>
  );
};

export default DayNightToggle;
