import express from "express"
import mysql from "mysql2"
import cors from "cors"
import bcrypt from "bcrypt";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"2001",
    database:"jupiterapparels"
})

app.use(express.json())
app.use(cors())



app.get("/", (req, res) => {
    res.json("Welcome to Jupiter Apparels")
})


app.post("/login", (req, res) => {   

    const q = "SELECT * FROM user WHERE User_ID = ?";
    db.query(q, [req.body.User_ID], (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error");
        }

        const user = data[0];
        bcrypt.compare(req.body.Password,user.Password ).then(function(result) {
            if (result) {           
                return res.json({ status: "Success", role: user.Access_level });

        } 
        else {
            return res.json("Invalid");
        }
        });
        
    });
});


app.post("/userCreate", (req, res) => { 

    bcrypt.hash(req.body.Password, 10).then(function(hash) {
        const q = "INSERT INTO user (User_ID, Employee_ID, Access_level, Password) VALUES (?, ?, ?,?)";
        db.query(q, [req.body.User_ID, req.body.Employee_ID,req.body.Access_level,hash], (err, data) => {

            if (err) {
                console.error(err);
                return res.json("Error");
            }

            return res.json("Success");
        });
    });
     
});

app.get("/department", (req, res) => {
    const q ="SELECT * FROM department"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

app.get("/department-hr", (req, res) => {
    const q ="SELECT * FROM department"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

app.get("/employee", (req, res) => {
    const q = `
        SELECT
            employee.Employee_ID,
            employee.First_Name,
            employee.Last_Name,
            employee.NIC,
            employee.Date_Of_Birth,
            employee.Gender,
            employee.Tel_No,
            employee.Email,
            department.Dept_Name AS Department,
            employee.Maritial_Status,
            job_title.Title AS Title,
            employee.Paygrade_ID,
            employee.Status_ID,
            employee.Supervisor_ID
        FROM
            employee
        INNER JOIN
            department ON employee.Dept_Id = department.Dept_ID
        INNER JOIN
            job_title ON employee.Title_ID = job_title.Title_ID
        ORDER BY Employee_ID ASC;
    `;
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})


app.get("/branch", (req, res) => {
    const q ="SELECT * FROM branch"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

app.get("/leave_request", (req, res) => {
    const q ="SELECT * FROM leave_request"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

app.get("/leave_bal", (req, res) => {
    const q ="SELECT * FROM leave_balance"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

app.get("/paygrade", (req, res) => {
    const q ="SELECT * FROM pay_grade"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

app.get("/emergency_cont", (req, res) => {
    const q ="SELECT * FROM emergency_contact"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})



app.get("/job", (req, res) => {
    const q ="SELECT * FROM job_title"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})


app.get("/dependant_info", (req, res) => {
    const q ="SELECT * FROM dependent_info";
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})


app.post("/job", (req, res) => {
    const q ="INSERT INTO job_title (Title_ID,Title) VALUES (?)";
    const values =[req.body.Title_ID, req.body.Title];

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post("/dependant_info", (req, res) => {
    const q ="INSERT INTO dependent_info (Name, Employee_ID, Date_of_Birth, Relationship) VALUES (?) ";
    const values =[req.body.Name, req.body.Employee_ID, req.body.Date_of_Birth, req.body.Relationship];

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post("/department", (req, res) => {
    const q ="INSERT INTO department (Dept_ID,Dept_Name,Building,Branch_ID) VALUES (?)";
    const values =[req.body.Dept_ID, req.body.Dept_Name, req.body.Building, req.body.Branch_ID];

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post("/employee", (req, res) => {
    const q ="INSERT INTO employee (Employee_ID, First_Name, Last_Name, NIC, Date_of_Birth, Gender, Tel_No, Email, Dept_ID, Maritial_Status, Title_ID, Paygrade_ID, Status_ID, Supervisor_ID) VALUES (?)";
    const values =[req.body.Employee_ID, req.body.First_Name, req.body.Last_Name, req.body.NIC, req.body.Date_of_Birth, req.body.Gender, req.body.Tel_No, req.body.Email, req.body.Dept_ID, req.body.Maritial_Status, req.body.Title_ID, req.body.Paygrade_ID, req.body.Status_ID, req.body.Supervisor_ID
    ];

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.put("/department/:Dept_ID", (req, res) => {
    const id = req.params.Dept_ID;
    const build = req.body.Building;
    const q = "UPDATE department SET `Building` = ? WHERE Dept_ID = ?"; 
    const values = [build, id];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.put("/leave_bal/:Employee_ID", (req, res) => {
    const id = req.params.Employee_ID;
    const anual= req.body.Annual;
    const casual = req.body.Casual;
    const maternity = req.body.Maternity;
    const no_pay = req.body.No_pay;
    const q = "UPDATE leave_balance SET `Annual` = ?, `Casual` = ?, `Maternity` = ?, `No_pay` = ? WHERE Employee_ID = ?";
    const values = [anual, casual, maternity, no_pay, id];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.put("/employee/:Employee_ID", (req, res) => {
    const id = req.params.Employee_ID;
    const telNo= req.body.Tel_No;
    const deptID = req.body.Dept_ID;
    const titleID= req.body.Title_ID;
    const paygrade = req.body.Paygrade_ID;
    const status = req.body.Status_ID;
    const supervisor = req.body.Supervisor_ID;
    const q = "UPDATE employee SET `Tel_No` = ?, `Dept_ID` = ?, `Title_ID` = ?, `Paygrade_ID` = ?, `Status_ID` = ?, `Supervisor_ID` = ? WHERE Employee_ID = ?";
    const values = [telNo, deptID, titleID, paygrade, status, supervisor, id];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.put("/emergency_cont/:Emerg_Contact_ID", (req, res) => {
    const id = req.params.Emerg_Contact_ID;
    const firstName= req.body.First_Name;
    const lastName = req.body.Last_Name;
    const telNo = req.body.Tel_No;
    const relationship = req.body.Relationship;
    const address = req.body.Address;
    const email = req.body.Email;
    const q = "UPDATE emergency_contact SET `First_Name` = ?, `Last_Name` = ?, `Tel_No` = ?, `Relationship` = ?, `Address` =?, `Email` =? WHERE Emerg_Contact_ID = ?";
    const values = [firstName,lastName,telNo, relationship, address, email, id];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.put("/paygrade/:Paygrade_ID", (req, res) => {
    const id = req.params.Paygrade_ID;
    const anual= req.body.Annual_Leave_Allowance;
    const casual = req.body.Casual_Leave_Allowance;
    const maternity = req.body.Maternity_Leave_Allowance;
    const no_pay = req.body.NO_pay_Allowance;
    const desc = req.body.Description;
    const q = "UPDATE pay_grade SET `Annual_Leave_Allowance` = ?, `Casual_Leave_Allowance` = ?, `Maternity_Leave_Allowance` = ?, `NO_pay_Allowance` = ?, `Description` = ? WHERE Paygrade_ID = ?";
    const values = [anual, casual, maternity, no_pay,desc, id];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.delete("/department/:Dept_ID", (req, res) => {
    const id = req.params.Dept_ID;
    const q = "DELETE FROM department WHERE Dept_ID = ?";

    db.query(q, [id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Book deleted successfully");
    });
});


app.get("/dept/:departmentId", (req,res) => {
    const id = req.params.departmentId;

    const q =`
        SELECT
            employee.Employee_ID,
            employee.First_Name,
            employee.Last_Name,
            employee.NIC,
            employee.Date_Of_Birth,
            employee.Gender,
            employee.Tel_No,
            employee.Email,
            employee.Maritial_Status,
            job_title.Title AS Title,
            employee.Paygrade_ID,
            employee.Status_ID,
            employee.Supervisor_ID
            FROM
            employee
            INNER JOIN
            job_title ON employee.Title_ID = job_title.Title_ID
            INNER JOIN
            department ON employee.Dept_ID = department.Dept_ID
            WHERE
            employee.Dept_ID = ?`;
    db.query(q, [id], (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    });
});

app.get("/paygrade/:paygrade_ID", (req,res) => {
    const id = req.params.departmentId;

    const q =`
        SELECT
            pay_
            
            FROM
            employee
            INNER JOIN
            job_title ON employee.Title_ID = job_title.Title_ID
            INNER JOIN
            department ON employee.Dept_ID = department.Dept_ID
            WHERE
            employee.Dept_ID = ?`;
    db.query(q, [id], (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    });
});

app.get("/leavebal/:departmentId", (req,res) => {
    const id = req.params.departmentId;

    const q =`
        SELECT
            department.Dept_ID AS Dept_ID,
            SUM(leave_balance.Annual) AS Annual,
            SUM(leave_balance.Casual) AS Casual,
            SUM(leave_balance.Maternity) AS Maternity,
            SUM(leave_balance.No_pay) AS No_pay
            FROM
            leave_balance
            INNER JOIN
            employee ON employee.Employee_ID = leave_balance.Employee_ID
            INNER JOIN
            department ON employee.Dept_ID = department.Dept_ID
            WHERE
            employee.Dept_ID = ?
            GROUP BY department.Dept_ID`;
    db.query(q, [id], (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data)
    });
});



app.listen(8800, () => {
    console.log("Backend server is running!!")
})