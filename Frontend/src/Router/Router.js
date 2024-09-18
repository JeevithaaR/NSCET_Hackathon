import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "../Pages/Student";
import Staff from "../Pages/Staff";
import HOD from "../Pages/HOD";
import Principal from "../Pages/Principal";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/student" element={<Student />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/hod" element={<HOD />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
