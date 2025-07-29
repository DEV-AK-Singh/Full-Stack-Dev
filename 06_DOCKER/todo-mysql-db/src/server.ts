import express from "express"; 
import mysql from 'mysql2'; 
import fs from 'fs/promises';

interface Employee { 
    id: number | null,
    name: string,
    design: string,
    dept: string,
    salary: number,
    mob: string | null
}

// const dummyEmp = { 
//     name: 'Abhishek',
//     design: 'Software Engineer',
//     dept: 'IT',
//     salary: 100000,
//     mob: null
// }

const app: express.Application = express(); 

app.use(express.json());

app.use(async (req, res, next) => {
    const req_info = new Date().toISOString() + ' ' + req.method + ' ' + req.url + ' ' + req.ip; 
    await fs.appendFile('server.log', req_info + '\n');
    next();
});

const pool = mysql.createPool({
    // host: 'localhost', // for local host 
    // host: 'host.docker.internal', // for container to host 
    // host: '172.17.0.2', // container to container using ip // docker inspect container_name
    host: 'mysql-docker',
    user: 'root',
    password: 'abhi',
    database: 'bank_db'
}).promise(); 

const createEmployeeTable = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS employees (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL,
            design VARCHAR(50) NOT NULL,
            dept VARCHAR(50) NOT NULL,
            salary INT NOT NULL,
            mob VARCHAR(50),
            PRIMARY KEY (id)
        )
    `);
}

const checkTableExistsElseCreate = async () => {
    const [rows] = await pool.query('SHOW TABLES LIKE "employees"') as [any, any];
    if (rows.length === 0) {
        await createEmployeeTable();
    }
}

const findAllEmployees = async () : Promise<Employee[]> => {
    const [rows] = await pool.query('SELECT * FROM employees') as [Employee[], any]; 
    return rows;
};

const findEmployeeById = async (id: number) : Promise<Employee> => {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]) as [Employee[], any];
    return rows[0];
};

const createEmployee = async (employee: Employee) : Promise<Employee> => {
    const [rows] = await pool.query('INSERT INTO employees SET ?', [employee]) as [Employee[], any];
    return rows[0];
};

const updateEmployee = async (id: number, employee: Employee) : Promise<Employee> => {
    const [rows] = await pool.query('UPDATE employees SET ? WHERE id = ?', [employee, id]) as [Employee[], any];
    return rows[0];
};

const deleteEmployee = async (id: number) : Promise<Employee> => {
    const [rows] = await pool.query('DELETE FROM employees WHERE id = ?', [id]) as [Employee[], any];
    return rows[0];
};

app.get("/employees", async (req: express.Request, res: express.Response) => {
    const employees = await findAllEmployees();
    res.send({
        status: "success",
        data: employees
    });
});

app.get("/employees/:id", async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id);
    const employee = await findEmployeeById(id);
    res.send({
        status: "success",
        data: employee
    });
});

app.post("/employees", async (req: express.Request, res: express.Response) => {
    const employee = req.body as Employee;
    const newEmployee = await createEmployee(employee);
    res.send({
        status: "success",
        data: newEmployee
    });
});

app.put("/employees/:id", async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id);
    const employee = req.body as Employee;
    const updatedEmployee = await updateEmployee(id, employee);
    res.send({
        status: "success",
        data: updatedEmployee
    });
});

app.delete("/employees/:id", async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id);
    const employee = await deleteEmployee(id);
    res.send({
        status: "success",
        data: employee
    });
});

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!!! from Node.js Server");
}); 

(async () => {
    await checkTableExistsElseCreate();
})();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});