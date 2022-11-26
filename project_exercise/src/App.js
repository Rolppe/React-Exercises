import React from "react";
import { Route, Routes } from "react-router-dom";
import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Expenses" element={<Expenses />} />
          <Route path="Invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
