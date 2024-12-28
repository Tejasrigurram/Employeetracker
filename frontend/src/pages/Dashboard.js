import React, { useEffect, useState } from "react";
import axios from "axios";
import AttendanceTable from "../components/AttendanceTable";
import ClockInOut from "../components/clockInout";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/sidebar";

function Dashboard() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [user, setUser] = useState({ username: "John Doe", role: "Manager" }); // Mock user data

  useEffect(() => {
    const fetchAttendance = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/attendance`, {
        headers: { Authorization: token },
      });
      setAttendanceRecords(response.data);
    };

    fetchAttendance();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <DashboardHeader username={user.username} role={user.role} onLogout={handleLogout} />
        <div style={{ padding: "20px" }}>
          <h1>Employee Attendance Tracker</h1>
          <ClockInOut />
          <AttendanceTable records={attendanceRecords} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
