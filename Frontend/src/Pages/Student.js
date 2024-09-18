import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import "../Styles/student.css"; // Assuming you have this CSS file

function Student() {
  const location = useLocation();
  const userData = location.state?.userData || {}; // Fallback if no data is passed
  const username=location.state?.username ||{}
  const [achievements, setAchievements] = useState([
    { task: "Project A", status: "Completed", date: "2023-03-01" },
    { task: "Project B", status: "In Progress", date: "2023-03-05" },
  ]);

  const [events, setEvents] = useState([
    { event: "Meeting with Client", date: "2023-03-15", location: "Conference Room" },
    { event: "Team Training", date: "2023-03-20", location: "Training Room" },
  ]);

  const handleAddAchievement = () => {
    setAchievements([...achievements, { task: "New Task", status: "Pending", date: "2023-09-01" }]);
  };

  const handleRemoveAchievement = (index) => {
    const newAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(newAchievements);
  };

  const handleAddEvent = () => {
    setEvents([...events, { event: "New Event", date: "2023-09-01", location: "New Hall" }]);
  };

  const handleRemoveEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <h1>Dashboard</h1>
      </div>

      <div className="full-container">
        <div className="sidebar">
          <div className="circle">
            <img src={userData.profilePicture || "https://via.placeholder.com/150"} alt="Profile" />
          </div>
          <ul>
            <li><strong>Name:</strong> {userData.name || "John Doe"}</li>
            <li><strong>Email:</strong> {userData.email || "john.doe@example.com"}</li>
            <li><strong>Role:</strong> {userData.role || "Student"}</li>
            <li><strong>Register Number:</strong> {username || "Reg no"}</li>
            <li><strong>Address:</strong> {userData.address || "Student"}</li>
            <li><strong>Year:</strong> {userData.year || "Student"}</li>
            <li><strong>DOB:</strong> {userData.password || "Student"}</li>
            <li><strong>Phone:</strong> {userData.phone || "Student"}</li>
          </ul>
        </div>

        <div className="main">
          <div className="section">
            <h2>Achievements</h2>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {achievements.map((achievement, index) => (
                  <tr key={index}>
                    <td>{achievement.task}</td>
                    <td>{achievement.status}</td>
                    <td>{achievement.date}</td>
                    <td><button onClick={() => handleRemoveAchievement(index)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddAchievement}>Add Achievement</button>
          </div>

          <div className="section">
            <h2>Events</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.event}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td><button onClick={() => handleRemoveEvent(index)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
