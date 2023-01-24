import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
  }, 1000);

  return (
    <main className="flex flex-col h-screen justify-between max-w-screen-md"></main>
  );
}

export default App;
