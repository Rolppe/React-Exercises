import "./Menu.css";

const MenuItem = (props) => {
  const clickHadler = () => {
    props.removeHandler(props.id);
  };

  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
      <button onClick={clickHadler}>Delete</button>
    </div>
  );
};

export default MenuItem;
