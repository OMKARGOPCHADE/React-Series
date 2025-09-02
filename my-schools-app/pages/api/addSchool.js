import formidable from "formidable";
import path from "path";
import fs from "fs";
import pool from "../../utils/db";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), "public/schoolImages");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = formidable({
      multiples: false,
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: "Form parsing error" });

      try {
        const { name, address, city, state, contact, email_id } = fields;

        // Handle both single & array case
        let imageFile = files.image;
        if (Array.isArray(imageFile)) imageFile = imageFile[0];

        let image = null;
        if (imageFile) {
          // Get filename only (not full path)
          image = path.basename(imageFile.filepath);
        }

        await pool.query(
          "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [name, address, city, state, contact, image, email_id]
        );

        res.status(200).json({ message: "✅ School added successfully!" });
      } catch (error) {
        console.error("DB Insert Error:", error);
        res.status(500).json({ error: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
