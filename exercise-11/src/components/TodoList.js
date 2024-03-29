const TodoList = (props) => {
  console.log("todoList");

  let content = props.todos.map((todo) => (
    <div key={todo.id}>
      <h2>{todo.text}</h2>
      <h3>{todo.date}</h3>
      <br></br>
    </div>
  ));

  return content;
};

export default TodoList;
