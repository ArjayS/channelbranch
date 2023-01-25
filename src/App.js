import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ThankYouPage from "./routes/ThankYouPage";

function App() {
  useEffect(() => {
    setTimeout(() => {
      const main = document.querySelector("main");
      main.style.opacity = 1;
    }, 1000);
  }, []);

  return (
    <main className="flex flex-col h-screen justify-between max-w-screen-md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
