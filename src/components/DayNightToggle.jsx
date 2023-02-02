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
              className="sun dv-svg h-5 w-5 absolute z-50 fill-white transition delay-150"
              enable-background="new 0 0 128 128"
              height="128px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 128 128"
              width="128px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M64.079,95.543c-17.39,0-31.537-14.148-31.537-31.538c0-17.389,14.147-31.535,31.537-31.535s31.537,14.146,31.537,31.535   C95.616,81.395,81.469,95.543,64.079,95.543z M64.079,36.47c-15.184,0-27.537,12.353-27.537,27.535   c0,15.184,12.354,27.538,27.537,27.538s27.537-12.354,27.537-27.538C91.616,48.823,79.263,36.47,64.079,36.47z" />
              </g>
              <g>
                <g>
                  <path d="M64.079,114.086c-1.104,0-2-0.896-2-2V101.41c0-1.105,0.896-2,2-2s2,0.895,2,2v10.676    C66.079,113.189,65.184,114.086,64.079,114.086z" />
                  <path d="M64.079,28.603c-1.104,0-2-0.896-2-2V15.926c0-1.104,0.896-2,2-2s2,0.896,2,2v10.677    C66.079,27.708,65.184,28.603,64.079,28.603z" />
                </g>
                <g>
                  <path d="M112.159,66.006h-10.676c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h10.676c1.104,0,2,0.896,2,2    C114.159,65.109,113.264,66.006,112.159,66.006z" />
                  <path d="M26.676,66.006H16c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h10.676c1.104,0,2,0.896,2,2    C28.676,65.109,27.78,66.006,26.676,66.006z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M98.075,100.004c-0.512,0-1.023-0.195-1.414-0.586l-7.548-7.549c-0.781-0.781-0.781-2.047,0-2.828s2.047-0.781,2.828,0    l7.548,7.549c0.781,0.781,0.781,2.047,0,2.828C99.099,99.809,98.587,100.004,98.075,100.004z" />
                  <path d="M37.63,39.558c-0.512,0-1.023-0.195-1.414-0.586l-7.548-7.549c-0.781-0.781-0.781-2.048,0-2.828    c0.781-0.781,2.047-0.781,2.828,0l7.548,7.549c0.781,0.781,0.781,2.048,0,2.828C38.653,39.363,38.142,39.558,37.63,39.558z" />
                </g>
                <g>
                  <path d="M90.527,39.558c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.781-0.781-2.048,0-2.828l7.55-7.549    c0.781-0.781,2.047-0.781,2.828,0s0.781,2.048,0,2.828l-7.55,7.549C91.551,39.363,91.039,39.558,90.527,39.558z" />
                  <path d="M30.082,100.004c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.781-0.781-2.049,0-2.828l7.549-7.549    c0.781-0.781,2.047-0.781,2.828,0s0.781,2.049,0,2.828l-7.549,7.549C31.105,99.809,30.594,100.004,30.082,100.004z" />
                </g>
              </g>
            </svg>
            <svg
              className="moon dn-svg h-3 w-3 bi bi-moon-stars left-6 absolute top-1 z-50 fill-gray-400 transition delay-150"
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
