import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
function AddTodo({ input, setInput, isEditing, editId, resetEdit }) {
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (isEditing) dispatch(updateTodo({ id: editId, text: input }));
    else dispatch(addTodo(input));

    resetEdit();
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 flex flex-col md:flex-row md:items-center gap-3 w-full max-w-xl mx-auto px-4"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 w-full"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full md:w-full"
      >
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
