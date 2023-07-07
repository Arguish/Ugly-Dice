import React from "react";
import { Route, Routes } from "react-router-dom";
import HW from "../Components/HW/HW";
import Home from "../Pages/Home";

const Directory = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Directory;
