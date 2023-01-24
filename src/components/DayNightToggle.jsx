import React, { useState, useEffect } from "react";

const DayNightToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="h-screen bg-white flex justify-center items-center">
        <button className="bg-green-200 p-4 rounded-3xl">Dark</button>
      </div>
    </>
  );
};

export default DayNightToggle;
