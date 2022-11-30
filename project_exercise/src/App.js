import React from "react";
import { Route, Routes } from "react-router-dom";
import HappyHour from "./pages/HappyHour";
import Settings from "./pages/Settings";
import Prices from "./pages/Prices";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Prices />} />
          <Route path="HappyHour" element={<HappyHour />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
