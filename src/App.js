import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./routes/MainPage";
import ThankYouPage from "./routes/ThankYouPage";

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
      <main className="flex flex-col h-screen justify-between" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
