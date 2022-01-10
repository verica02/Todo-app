import { useState } from "react";
import { addTodo } from "../util/crud";

const NewTodoForm = ({ setAllTodos }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded  w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button
        className="flex-no-shrink px-3 pb-2 border-2 rounded text-3xl text-blue-500 border-blue-500 hover:text-blue hover:bg-blue-200"
        onClick={() => addTodo(newTodoTitle, setNewTodoTitle, setAllTodos)}
      >+</button>
    </div>
  );
};

export default NewTodoForm;
