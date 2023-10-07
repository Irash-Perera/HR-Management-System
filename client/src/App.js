
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Configure from "./components/configure/UpdateDepartment";
import Append from "./components/append/AddJob";
import Department from './components/assets/Department';
import Adddept from './components/append/Add_dept';
import Addemployee from './components/append/Add_employee';
import Login from './components/assets/Login';
import AdminDashboard from './components/dashborads/AdminDashboard'
import Level1Dashboard from './components/dashborads/Level1Dashboard'
import SupervisorDashboard from './components/dashborads/SupervisorDashboard';
import HRDashboard from './components/dashborads/HRDashboard';
import SecMngUserDashboard from './components/dashborads/SecMngUserDashboard';
import Employee from './components/assets/Employee';
import Branch from './components/assets/Branch';
import Job from './components/assets/JobTitle';
import LeaveBal from './components/assets/LeaveBalance';
import UpdateLeaveBal from './components/configure/UpdateLeaveBal';
import Paygrade from './components/assets/Paygrade';
import UpdatePaygrade from './components/configure/UpdatePaygrade';
import LeaveRequest from './components/assets/LeaveRequests';
import EmergencyCont from './components/assets/EmergencyCont';
import UpdateEmergencyCont from './components/configure/UpdateEmergCont';
import DependantInfo from './components/assets/DependantInfo';
import AddDependent from './components/append/AddDependent';
import UpdateEmployee from './components/configure/UpdateEmployee';
import Departmenthr from './components/assets/Departmenthr';
import LeaveBalancehr from './components/assets/LeaveBalancehr';
import Report from './components/assets/ReportbyDept'
import Report1 from './components/assets/ReportbyLeave'
import SecMngUserCreate from './components/append/Add_secmng';

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
          <Route path="/report" element={<Report/>}/>
          <Route path="/report1" element={<Report1/>}/>
          <Route path="/add_secmng" element={<SecMngUserCreate/>}/>
          


        
        </Routes> 
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
