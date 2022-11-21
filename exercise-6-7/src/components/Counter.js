const Counter = (props) => {
  return (
    <div>
      <p>{props.value}</p>
      <button onClick={props.incrementHandler}>Increment</button>
    </div>
  );
};

export default Counter;
