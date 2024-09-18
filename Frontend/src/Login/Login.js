import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import { db } from "../Firebase"; 
import "./login.css";
import img from "../Assests/college_logo.png";
import Slider from "../Components/slider";
import { addStudent } from "../Firebase";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [dept, setDept] = useState("");
  const [year, setYear] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
  console.log('Password:', password);
  console.log('Role:', role);
  console.log('Dept:', dept);
  console.log('Year:', year);
    try {
      const userRef = role === "Students" 
        ? ref(db, `nscet/${dept}/${role}/${year}/${username}`)
        : ref(db, `nscet/${dept}/${role}/${username}`);
      
      // Fetch the snapshot from Firebase
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();

        // Assuming that password is stored in Firebase and comparing it
        if (userData.password === password) {
          // Redirect based on role
          if (role === "Students") {
            navigate("/student", { state: { userData,username } });
          } else if (role === "Staff") {
            navigate("/staff", { state: { userData,username } });
          } else if (role === "hod") {
            navigate("/hod", { state: { userData,username } });
          } else if (role === "principal") {
            navigate("/principal", { state: { userData ,username} });
          } else {
            alert("Invalid role");
          }
        } else {
          alert("Incorrect password or role mismatch.");
        }
      } else {
        alert("No user data found in the database.");
      }
    } catch (error) {
      console.error("Error during login: ", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="header-container">
        <div className="header-content">
          <img
            src={img} 
            alt="College Logo"
            className="college-logo"
          />
          <div className="header-text">
            <h1 className="college-name">
              NADAR SARASWATHI COLLEGE OF ENGINEERING AND TECHNOLOGY
            </h1>
            <h2 className="college-tagline">
              Approved by AICTE & Affiliated to Anna University
            </h2>
            <h2 className="college-tagline">Accredited by NAAC "A" Grade</h2>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="image-container">
          <Slider />
        </div>
        <div className="login-box">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="input-group">
              <label>Select Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="Students">Student</option>
                <option value="Staff">Faculty</option>
                <option value="hod">HOD</option>
                <option value="principal">Principal</option>
              </select>
            </div>

            {/* Conditionally show department and year input for student/faculty/HOD */}
            {(role === "Students" || role === "Staff" || role === "hod") && (
              <>
                <div className="input-group">
                  <label>Select Dept</label>
                  <select
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
                    <option value="ECE">ECE</option>
                  </select>
                </div>

                {role === "Students" && (
                  <div className="input-group">
                    <label>Select Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Third">Third</option>
                    <option value="Second">Second</option>
                  </select>
                  </div>
                )}
              </>
            )}

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
