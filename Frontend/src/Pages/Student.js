import React from "react";
import { useLocation } from "react-router-dom"; // To get the passed state
import "../Styles/student.css";

function Student() {
  const location = useLocation();
  const userData = location.state?.userData || {}; // Fallback to an empty object if no data is passed

  return (
    <div className="student-container">
      <div className="student-header">
        <h1>Dashboard</h1>
      </div>
      <div className="student-content">
        {/* Sidebar for user profile */}
        <div className="sidebar">
          <div className="circle">
            {/* Display user's profile image if available, else show a default image */}
            <img
              src={userData.profilePicture || "https://via.placeholder.com/150"}
              alt="Profile"
            />
          </div>
          <ul>
            <li>
              <strong>Name:</strong> {userData.name || "John Doe"}
            </li>
            <li>
              <strong>Email:</strong> {userData.email || "john.doe@example.com"}
            </li>
            <li>
              <strong>Role:</strong> {userData.role || "Student"}
            </li>
          </ul>
        </div>

        {/* Main content for achievements and events */}
        <div className="main">
          <div className="section">
            <h2>Achievements</h2>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data for now, you can dynamically render user achievements here */}
                <tr>
                  <td>Project A</td>
                  <td>Completed</td>
                  <td>2023-03-01</td>
                </tr>
                <tr>
                  <td>Project B</td>
                  <td>In Progress</td>
                  <td>2023-03-05</td>
                </tr>
                <tr>
                  <td>Project C</td>
                  <td>Pending</td>
                  <td>2023-03-10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h2>Events</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data for events */}
                <tr>
                  <td>Meeting with Client</td>
                  <td>2023-03-15</td>
                  <td>Conference Room</td>
                </tr>
                <tr>
                  <td>Team Training</td>
                  <td>2023-03-20</td>
                  <td>Training Room</td>
                </tr>
                <tr>
                  <td>Project Launch</td>
                  <td>2023-03-25</td>
                  <td>Event Hall</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar for announcements */}
        <div className="sidebar announcements-sidebar">
          <h2>Announcements</h2>
          <ul>
            <li>New update released for the system.</li>
            <li>Meeting scheduled for tomorrow at 10 AM.</li>
            <li>Team lunch on Friday.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Student;
