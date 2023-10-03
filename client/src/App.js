
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Configure from "./components/config/UpdateDepartment";
import Append from "./components/append/AddJob";
import Department from './components/models/Department';
import Adddept from './components/append/Add_dept';
import Addemployee from './components/append/Add_employee';
import Login from './components/models/Login';
import AdminDashboard from './components/dashborads/AdminDashboard'
import Level1Dashboard from './components/dashborads/Level1Dashboard'
import SupervisorDashboard from './components/dashborads/SupervisorDashboard';
import HRDashboard from './components/dashborads/HRDashboard';
import SecMngUserDashboard from './components/dashborads/SecMngUserDashboard';
import Employee from './components/models/Employee';
import Branch from './components/models/Branch';
import Job from './components/models/JobTitle';
import LeaveBal from './components/models/LeaveBalance';
import UpdateLeaveBal from './components/config/UpdateLeaveBal';
import Paygrade from './components/models/Paygrade';
import UpdatePaygrade from './components/config/UpdatePaygrade';
import LeaveRequest from './components/models/LeaveRequests';
import EmergencyCont from './components/models/EmergencyCont';
import UpdateEmergencyCont from './components/config/UpdateEmergCont';
import DependantInfo from './components/models/DependantInfo';
import AddDependent from './components/append/AddDependent';
import UpdateEmployee from './components/config/UpdateEmployee';
import Departmenthr from './components/models/Departmenthr';
import LeaveBalancehr from './components/models/LeaveBalancehr';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/level1" element={<Level1Dashboard/>}/>
          <Route path="/supervisor" element={<SupervisorDashboard/>}/>
          <Route path="/hr" element={<HRDashboard/>}/>
          <Route path="/secmanager" element={<SecMngUserDashboard/>}/>
          <Route path="/configure/:Dept_ID" element={<Configure/>}/>
          <Route path="/append" element={<Append/>}/>
          <Route path="/department" element={<Department/>}/>
          <Route path="/add_dept" element={<Adddept/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/add_employee" element={<Addemployee/>}/>
          <Route path="/branch" element={<Branch/>}/>
          <Route path="/job" element={<Job/>}/>
          <Route path="/leave_bal" element={<LeaveBal/>}/>
          <Route path="/update_leave_bal/:Employee_ID" element={<UpdateLeaveBal/>}/>
          <Route path="/paygrade" element={<Paygrade/>}/>
          <Route path="/update_paygrade/:Paygrade_ID" element={<UpdatePaygrade/>}/>
          <Route path="/leave_request" element={<LeaveRequest/>}/>
          <Route path="/emergency_cont" element={<EmergencyCont/>}/>
          <Route path="/update_emergency_cont/:Emerg_Contact_ID" element={<UpdateEmergencyCont/>}/>
          <Route path="/dependant_info" element={<DependantInfo/>}/>
          <Route path="/add_dependent" element={<AddDependent/>}/>
          <Route path="/update_employee/:Employee_ID" element={<UpdateEmployee/>}/>
          <Route path="/departmenthr" element={<Departmenthr/>}/>
          <Route path="/leavebalancehr" element={<LeaveBalancehr/>}/>


        
        </Routes> 
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
