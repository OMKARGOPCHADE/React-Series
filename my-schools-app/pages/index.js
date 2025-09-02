import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen flex flex-col`}
    >
      {/* Navbar */}
      <nav className="w-full bg-blue-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Schools Info</h1>
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/addSchool" className="hover:underline">
            Add School
          </Link>
          <Link href="/showSchools" className="hover:underline">
            Show Schools
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col gap-8 flex-grow items-center justify-center text-center p-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to the Schools Info WebApp 🎓
        </h2>
        <p className="text-gray-600 max-w-xl">
          This platform allows you to easily add and explore information about
          schools. Navigate using the menu above to get started.
        </p>

        <div className="flex gap-6">
          <Link
            href="/addSchool"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            ➕ Add School
          </Link>
          <Link
            href="/showSchools"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            📚 Show Schools
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-sm py-4 text-center">
        © {new Date().getFullYear()} Omkar Schools. All rights reserved.
      </footer>
    </div>
  );
}
