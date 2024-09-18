import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase"; // Import correct services
import "./login.css";
import img from "../Assests/college_logo.png";
import Slider from "../Components/slider";
import { addStudent } from "../Firebase";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addStudent();

    try {
      // Reference the path to the user data in Firebase Realtime Database
      const userRef = ref(db, `nscet/hod(cse)/student-4th/${username}`);
      
      // Fetch the snapshot from Firebase
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();

        // Assuming that password is stored in Firebase and comparing it
        if (userData.password === password && userData.role === role) {
          // Redirect based on role
          if (userData.role === "student") {
            navigate("/student", { state: { userData } });
          } else if (userData.role === "faculty") {
            navigate("/staff", { state: { userData } });
          } else if (userData.role === "hod") {
            navigate("/hod", { state: { userData } });
          } else if (userData.role === "principal") {
            navigate("/principal", { state: { userData } });
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
            src={img} // Use the imported image
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
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="hod">HOD</option>
                <option value="principal">Principal</option>
              </select>
            </div>
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
