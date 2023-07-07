import React from "react";
import { Route, Routes } from "react-router-dom";
import HW from "../Components/HW/HW";

const Directory = () => {
  return (
    <Routes>
      <Route path="/" element={<HW />} />
    </Routes>
  );
};

export default Directory;
