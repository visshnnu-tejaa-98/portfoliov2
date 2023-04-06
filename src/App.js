import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={`h-full w-full mx-auto py-2 text-center
    ${darkMode ? "dark" : ""}`}
    >
      <h1 className="bg:red-300 dark:[#0F172A]">Visshnnu's Portfolio</h1>
      <button onClick={toggleDarkMode} className="p-2 bg-red-500">
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
