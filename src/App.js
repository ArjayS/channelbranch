import React, { useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ThankYouPage from "./routes/ThankYouPage";

export const ThemeContext = createContext(null);

function App() {
  useEffect(() => {
    setTimeout(() => {
      const main = document.querySelector("main");
      main.style.opacity = 1;
    }, 1000);
  }, []);

  return (
    <ThemeContext.Provider>
      <main
        className="flex flex-col h-screen justify-between max-w-screen-md"
        id="light"
      >
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
