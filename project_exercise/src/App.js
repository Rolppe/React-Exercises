import { Outlet } from "react-router-dom";
import React from "react";
import BootBar from "./components/BootBar";

function App() {
  return (
    <div>
      <BootBar />
      <Outlet />
    </div>
  );
}

export default App;
