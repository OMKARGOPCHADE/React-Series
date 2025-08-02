import { useState } from "react";
import "./index.css";
function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-100"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 rounded-2xl shadow-lg bg-amber-100 px-2 py-3 text-white">
          <button
            className="outline-none px-4 bg-red-600 py-2 rounded-2xl"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button className="outline-none px-4 bg-green-400 py-2 rounded-2xl"
          onClick={() => setColor("green")}>
            Green
          </button>
          <button className="outline-none px-4 bg-blue-400 py-2 rounded-2xl"
          onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className="outline-none px-4 bg-stone-400 py-2 rounded-2xl"
          onClick={() => setColor("olive")}>
            Olive
          </button>
          <button className="outline-none px-4 bg-gray-400 py-2 rounded-2xl"
          onClick={() => setColor("gray")}>
            Gray
          </button>
          <button className="outline-none px-4 bg-yellow-400 py-2 rounded-2xl"
          onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className="outline-none px-4 bg-pink-400 py-2 rounded-2xl"
          onClick={() => setColor("pink")}>
            Pink
          </button>
          <button className="outline-none px-4 bg-purple-400 py-2 rounded-2xl"
          onClick={() => setColor("purple")}>
            Purple
          </button>
          <button className="outline-none px-4 bg-yellow-50 py-2 rounded-2xl text-black"
          onClick={() => setColor("lavender")}>
            Lavender
          </button>
          <button className="outline-none px-4 bg-black py-2 rounded-2xl"
          onClick={() => setColor("black")}>
            Black
          </button>
          <button className="outline-none px-4 bg-white py-2 rounded-2xl text-black"
          onClick={() => setColor("white")}>
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
