import "./Menu.css";

const AddItem = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;

    let newItem = {
      id: Math.random(),
      name: name,
      price: price,
    };

    props.setMenuItems((prevMenuItems) => [...prevMenuItems, newItem]);

    event.target.elements.name.value = "";
    event.target.elements.price.value = "";
  };

  return (
    <form className="Menu" onSubmit={handleSubmit}>
      <input type="text" id="name" />
      <input type="text" id="price" />
      <button type="submit">Add Menu Item</button>
    </form>
  );
};

export default AddItem;
