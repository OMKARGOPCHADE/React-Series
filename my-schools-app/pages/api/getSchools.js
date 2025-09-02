// /pages/api/getSchools.js
export default async function handler(req, res) {
  try {
    // your MySQL fetch code here...
    const schools = []; // fetch from DB
    res.status(200).json(schools);
  } catch (err) {
    console.error("DB error:", err.message);

    // fallback data
    res.status(200).json([
      {
        id: 1,
        name: "Demo School",
        address: "123 Vercel Street",
        city: "Online City",
        image: "default.jpg"
      }
    ]);
  }
}
