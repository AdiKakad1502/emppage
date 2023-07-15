const express = require("express");
const app = express();
const cors = require("cors");
const uuid = require("uuid");
app.use(cors());
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "adikakad152",
    database: "polyglots_employees",
});

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM employees WHERE username = ? AND password = ?"
    const values = [req.body.username, req.body.password];
});

app.get("/employees", (req, res) => {
    const q = "SELECT * FROM employees";
    db.query(q, (err, result) => {
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
});

app.post("/api/submitreview", async (req, res) => {
    const reviewData = req.body;
    const managerEmailQuery = "INSERT INTO performance_reviews (id_emp,id_manager,review,timestamp,name) VALUES (?,?,?,?,?)";
    const retrieveEmployeeID = "SELECT id FROM employees WHERE name = ?";
    const retreiveManagerID = " SELECT manager_id FROM employees WHERE id = ?"
    const managerId = db.query(retreiveManagerID, [id], (err, result) => {
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
    const values = [id, managerId, review, new Date(), name];
});
app.post("/api/submitForm", async (req, res) => {
    const employeeID = uuid.v4();
    const formData = req.body;
    const q = "INSERT INTO employees (id,name,gender,department,role,description,photo,joiningDate,mailID,phone) VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, ?);"
    const values = [
        employeeID,
        formData.name,
        formData.gender,
        formData.department,
        formData.role,
        formData.description,
        formData.photo,
        formData.joiningDate,
        formData.mailID,
        formData.phone,
    ]
    db.query(q, values, (err, result) => {
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
/*     try{
        const connection = await db.getConnection();
        await connection.query(
            "INSERT INTO employees (id,name,gender,department,role,description,photo,joiningDate,mailID,phone) VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                employeeID,
                formData.name,
                formData.gender,
                formData.department,
                formData.role,
                formData.description,
                formData.photo,
                formData.joiningDate,
                formData.mailID,
                formData.phone,
            ]  
        );
        connection.release();
        res.json({message: 'Form data saved successfully'})
    }
    catch(err){
        console.error(err);
        res.status(500).send('Error while saving form data. Please try again later.');
} */
});


/* function createEmployee(name,gender,department,role,description,photo,teammembers,tasks,joiningDate,mailID,phone) {
    const employeeID = uuid.v4();
    const q = "INSERT INTO employees (id,name,gender,department,role,description,photo,teammembers,tasks,joiningDate,mailID,phone) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    const values = [employeeID,name,gender,department,role,description,photo,teammembers,tasks,joiningDate,mailID,phone];
    db.query(q, values, (err, result) => {
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
} */

function editEmployee(id,name,gender,department,role,description,photo,teammembers,tasks,joiningDate,mailID,phone){

}

/* app.post("/submit-evaluation", (req, res) => {
    const reviewData = req.body;
    const managerEmailQuery = "INSERT INTO performance_reviews (id_emp,id_manager,review,timestamp,name) VALUES (?,?,?,?,?)";
    const retrieveEmployeeID = "SELECT id FROM employees WHERE name = ?";
    const retreiveManagerID = " SELECT manager_id FROM employees WHERE id = ?"
    const managerId = db.query(retreiveManagerID, [id], (err, result) => {
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
    const values = [id, managerId, review, new Date(), name];
}); */
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
