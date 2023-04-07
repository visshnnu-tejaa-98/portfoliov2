import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NavLayout from "./components/NavLayout";
import { FolioContextProvider } from "./contexts/folioContext";

function App() {
  return (
    <FolioContextProvider>
      <NavLayout />
    </FolioContextProvider>
  );
}

export default App;
