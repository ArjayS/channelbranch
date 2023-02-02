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
      <div className="m-0 h-10 flex flex-col justify-center items-center hover-trigger">
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
          >
            <svg
              className="sun h-4 w-4"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="none" height="256" width="256" />
              <circle
                cx="128"
                cy="128"
                fill="none"
                r="60"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="128"
                x2="128"
                y1="36"
                y2="16"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="62.9"
                x2="48.8"
                y1="62.9"
                y2="48.8"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="36"
                x2="16"
                y1="128"
                y2="128"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="62.9"
                x2="48.8"
                y1="193.1"
                y2="207.2"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="128"
                x2="128"
                y1="220"
                y2="240"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="193.1"
                x2="207.2"
                y1="193.1"
                y2="207.2"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="220"
                x2="240"
                y1="128"
                y2="128"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="193.1"
                x2="207.2"
                y1="62.9"
                y2="48.8"
              />
            </svg>
            <svg
              className="moon h-3 w-3 bi bi-moon-stars"
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg>
          </label>
        </div>
        <label className="mt-0.25 hover-target-slow">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </label>
      </div>
    </>
  );
};

export default DayNightToggle;
