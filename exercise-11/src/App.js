import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://todo-list-4aa0f-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchTodos();
  };

  const fetchTodos = async () => {
    const response = await fetch(
      "https://todo-list-4aa0f-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );

    const data = await response.json();
    const fetchedTodos = [];

    for (const key in data) {
      fetchedTodos.push({
        id: key,
        text: data[key].text,
        date: data[key].date,
      });
    }
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // let content = todos.map((todo) => (
  //   <div key={todo.id}>
  //     <h2>{todo.text}</h2>
  //     <h3>{todo.date}</h3>
  //     <br></br>
  //   </div>
  // ));

  return (
    <>
      <section>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <section>
        <TodoList todos={todos} />
      </section>
    </>
  );
};

export default App;

//      <section>{todos.length > 0 ? content : <p>No Data</p>} </section>
