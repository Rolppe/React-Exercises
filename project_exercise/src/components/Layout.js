import React from "react";
import { Outlet } from "react-router-dom";
import BootBar from "./BootBar";

export default function Layout() {
  return (
    <div>
      <BootBar />
      <Outlet />
    </div>
  );
}
