import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./routes/MainPage";
import ThankYouPage from "./routes/ThankYouPage";
import DayNightToggle from "./components/DayNightToggle";
import CopyToClipboard from "./components/CopyToClipboard";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setTimeout(() => {
      const main = document.querySelector("main");
      main.style.opacity = 1;
    }, 1000);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main
        className="flex flex-col h-screen w-screen text-center items-center"
        id={theme}
      >
        <header className="cursor-pointer flex flex-row w-4/12 justify-between items-center bg-opacity-50 mt-5">
          <div className="bg-slate-200 rounded-md bg-opacity-25">
            <CopyToClipboard url={"https://localhost:3000"} />
          </div>
          <DayNightToggle
            onChange={toggleTheme}
            checked={theme === "dark"}
            theme={theme}
          />
        </header>
        <div className="flex flex-col w-screen justify-between">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/thankyou" element={<ThankYouPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
