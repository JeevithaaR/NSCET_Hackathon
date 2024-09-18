import React, { useState } from "react";

const Principal = ({ onFinalApprove }) => {
  const [studentData, setStudentData] = useState({
    phone: '',
    color: ''
  });

  const handleApprove = () => {
    const finalData = { ...studentData, status: "approved" };
    onFinalApprove(finalData);
  };

  return (
    <div>
      <h2>Principal Approval</h2>
      <p>Phone: {studentData.phone}</p>
      <p>Color: {studentData.color}</p>
      <button onClick={handleApprove}>Approve</button>
    </div>
  );
};

export default Principal;
