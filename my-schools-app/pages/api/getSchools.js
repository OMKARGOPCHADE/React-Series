// pages/api/getSchools.js
import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    // ⚠️ Make sure you configured these in .env.local
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await db.query("SELECT * FROM schools");
    res.status(200).json(rows);
  } catch (err) {
    console.error("DB Error:", err.message);
    res.status(500).json({ error: "Database connection failed" });
  }
}
