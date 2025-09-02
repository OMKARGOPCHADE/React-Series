import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",       // change if needed
  password: "sharvi@123",       // your MySQL password
  database: "schooldb",
});

export default pool;
