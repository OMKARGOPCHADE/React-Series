import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email_id);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]); // ✅ ensure file gets attached
      }

      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: formData, // ✅ FormData ensures multipart/form-data
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ School added successfully!");
      } else {
        setMessage("❌ Error: " + result.error);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-amber-900 p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-4"
        encType="multipart/form-data" // ✅ important for file upload
      >
        <h1 className="text-2xl font-bold text-center text-white">Add School</h1>

        <input {...register("name", { required: true })} placeholder="School Name"
          className="w-full p-3 border rounded-lg" />
        {errors.name && <span className="text-red-500">School name is required</span>}

        <input {...register("address", { required: true })} placeholder="Address"
          className="w-full p-3 border rounded-lg" />

        <input {...register("city", { required: true })} placeholder="City"
          className="w-full p-3 border rounded-lg" />

        <input {...register("state", { required: true })} placeholder="State"
          className="w-full p-3 border rounded-lg" />

        <input {...register("contact", { required: true })} placeholder="Contact"
          className="w-full p-3 border rounded-lg" />

        <input {...register("email_id", { required: true })} placeholder="Email"
          type="email" className="w-full p-3 border rounded-lg" />

        <input type="file" {...register("image")} className="w-full p-3 border rounded-lg" />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add School"}
        </button>

        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </motion.div>
  );
}
