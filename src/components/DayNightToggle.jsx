import React, { useState, useEffect } from "react";

const DayNightToggle = (props) => {
  const { onChange, checked, theme } = props;
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
      <div className="m-0 h-10 flex flex-col justify-center items-center">
        {/* <button
          className="bg-green-200 p-4 rounded-3xl"
          onClick={handleThemeSwitch}
        >
          DayNightToggle
        </button> */}
        <div>
          <input
            type="checkbox"
            onChange={onChange}
            checked={checked}
            className="dn-input w-0 h-0 invisible"
            id="darkmode-toggle"
          />
          <label
            className="dn-toggle w-10 h-5 relative block bg-cyan-100 rounded-2xl cursor-pointer ease-in duration-300"
            for="darkmode-toggle"
          ></label>
        </div>
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      </div>
    </>
  );
};

export default DayNightToggle;
