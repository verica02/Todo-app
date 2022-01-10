import { completeTodo, deleteTodo } from "../util/crud";

const Todos = ({ allTodos, setAllTodos }) => {
  return (
    <ul className="pt-8">
      {allTodos.map((todo) => (
        <li
          className={"flex mb-4 pb-4 items-center border-b-2 border-grey-300"}
          key={todo._id}
        >
          <p
            className={`w-full ${
              todo.completed ? "line-through text-green-600" : ""
            }`}
          >
            {todo.title}
          </p>
          <button
            className={`flex-no-shrink px-3.5 py-2 ml-4 mr-2 border-2 rounded-full hover:text-gray-500 ${
              todo.completed
                ? "text-green-500 bg-green-200 border-green-500 hover:bg-gray-300 border-gray-500"
                : "text-gray-500 border-gray-500 hover:bg-gray-300 "
            }`}
            onClick={() => completeTodo(todo, setAllTodos)}
          >
           ✓
          </button>
          <button
            className="flex-no-shrink px-3.5 py-2 ml-2 border-2 rounded-full text-red-500 border-red-500 hover:text-red hover:bg-red-200"
            onClick={() => deleteTodo(todo, setAllTodos)}
          >
           ✘
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
