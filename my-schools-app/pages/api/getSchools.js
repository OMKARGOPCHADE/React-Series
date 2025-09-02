// pages/api/getSchools.js
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "MVV Degloor",
      address: "Udgir Road, Degloor",
      city: "Degloor",
      image: "mvv.jpg",
    },
    {
      id: 2,
      name: "ACPCE",
      address: "Kharghar",
      city: "Navi Mumbai",
      image: "clg1.jpg",
    },
  ]);
}
