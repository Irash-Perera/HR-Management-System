import React from 'react';
import '../styleAssets/AdminDashboard.css'; 
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><button className="add viewbutton"><Link to="/employee">Employees</Link></button></li>
          <li><button className="add viewbutton"><Link to="/emergency_cont">Emergency Contacts</Link></button></li>
          <li><button className="add viewbutton"><Link to="/dependant_info">Dependant Info.</Link></button></li>
          <li><button className="add viewbutton"><Link to="/department">Departments</Link></button></li>
          <li><button className="add viewbutton"><Link to="/job">Job Titles</Link></button></li>
          <li><button className="add viewbutton"><Link to="/branch">Branches</Link></button></li>
          <li><button className="add viewbutton"><Link to="/leave_bal">Leave Balances</Link></button></li>
          <li><button className="add viewbutton"><Link to="/leave_request">Leave Requests</Link></button></li>
          <li><button className="add viewbutton"><Link to="/paygrade">Paygrades</Link></button></li>
        </ul>
      </aside>

      <main className="content">
        <header>
          <h1 className="company">Jupiter Apparels</h1>
          <h1>Welcome, Admin!</h1>
        </header>

      </main>
    </div>
  );
}

export default AdminDashboard;
