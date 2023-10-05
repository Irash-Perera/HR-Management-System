import React, { useState } from 'react';
import axios from 'axios';
import '../styleAssets/Report.css';

const DepartmentLeaves = () => {
  const [departmentId, setDepartmentId] = useState('');
  const [Leaves, setLeaves] = useState([]);

  const fetchDepartmentLeaves = async () => {
    try {
      const res = await axios.get("http://localhost:8800/leavebal/"+departmentId);
      setLeaves(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Department Leaves</h2>
      <label>Department ID: </label>
      <input
        type="text"
        value={departmentId}
        onChange={(e) => setDepartmentId(e.target.value)}
      />
      <button onClick={fetchDepartmentLeaves}>Fetch Leaves</button>

      <table className='Employee-table'>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Annual</th>
            <th>Casual</th>
            <th>Maternity</th>
            <th>No-Pay</th>
          </tr>
        </thead>
        <tbody>
          {Leaves.map((Leave) => (
            <tr key={Leave.Dept_ID}>
              <td>{Leave.Dept_ID}</td>
              <td>{Leave.Annual}</td>
              <td>{Leave.Casual}</td>
              <td>{Leave.Maternity}</td>
              <td>{Leave.No_pay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentLeaves;
