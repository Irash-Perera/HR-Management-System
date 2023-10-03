import React from 'react';
import '../styleAssets/AdminDashboard.css'; 
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>HR Dashboard</h2>
        <ul>
          <li><button className="add viewbutton"><Link to="/employee">Edit Personal Information of the Employees </Link></button></li>
          <li><button className="add viewbutton"><Link to="/emergency_cont">View Emergency Contacts</Link></button></li>
          <li><button className="add viewbutton"><Link to="/dependant_info">View Dependant Info.</Link></button></li>
          <li><button className="add viewbutton"><Link to="/departmenthr">View Departments</Link></button></li>
          <li><button className="add viewbutton"><Link to="/job">View Job Titles</Link></button></li>
          <li><button className="add viewbutton"><Link to="/branch"> View Branches</Link></button></li>
          <li><button className="add viewbutton"><Link to="/leavebalancehr">View Leave Balances</Link></button></li>
          <li><button className="add viewbutton"><Link to="/paygrade">Edit Leave Allowances</Link></button></li>
          <li><button className="add viewbutton"><Link to="/paygrade">Generate Reports</Link></button></li>
        </ul>
      </aside>

      <main className="content">
        <header>
          <h1 className="company">Jupiter Apparels</h1>
          <h1>Welcome, HR Manager!</h1>
        </header>

      </main>
    </div>
  );
}

export default AdminDashboard;
