import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./routes/MainPage";
import ThankYouPage from "./routes/ThankYouPage";
import ReactSwitch from "react-switch";
import DayNightToggle from "./components/DayNightToggle";

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
      <div id={theme}>
        <div>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <DayNightToggle onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <main className="flex flex-col h-screen justify-between">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/thankyou" element={<ThankYouPage />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
