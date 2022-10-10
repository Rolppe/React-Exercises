import { useRef } from "react";

const AddTodo = (props) => {
  const textRef = useRef("");
  const dateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const todo = {
      text: textRef.current.value,
      date: dateRef.current.value,
    };

    props.onAddTodo(todo);

    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Text</label>
        <textarea rows="5" id="text" ref={textRef}></textarea>
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" ref={dateRef} />
      </div>

      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
