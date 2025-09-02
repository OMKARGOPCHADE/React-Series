import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/getSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        🏫 Our Beautiful Schools
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {schools.map((school, i) => (
          <motion.div
            key={school.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
          >
            <motion.img
              src={`/schoolImages/${school.image}`}
              alt={school.name}
              className="h-48 w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">{school.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{school.address}</p>
              <p className="text-sm font-medium text-purple-600">{school.city}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transition-all"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
