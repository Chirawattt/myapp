import { useState } from "react";
import "./Todo.css";

function generateId() {
  return Math.floor(Math.random() * 1000);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos(
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
        />

        <button onClick={handleSubmit}>Submit</button>
        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
