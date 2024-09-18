import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Login/Login";
import Student from "./Pages/Student";
import Staff from "./Pages/Staff";
import HOD from "./Pages/HOD";
import Principal from "./Pages/Principal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<Layout><Student /></Layout>} />
        <Route path="/staff" element={<Layout><Staff /></Layout>} />
        <Route path="/hod" element={<Layout><HOD /></Layout>} />
        <Route path="/principal" element={<Layout><Principal /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
