import "./components/Menu.css";
import MenuList from "./components/MenuList";
import { useState } from "react";

import AddItem from "./components/AddItem";

const menu = [
  {
    id: 1,
    name: "hamburger",
    price: 9,
  },
  {
    id: 2,
    name: "pizza",
    price: 12,
  },
  {
    id: 3,
    name: "meatballs",
    price: 10,
  },
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const removeHandler = (id) => {
    console.log("remove handler id:  " + id);
    setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="menu">
      <h1>Restaurant</h1>
      <MenuList menuItems={menuItems} removeHandler={removeHandler} />
      <AddItem setMenuItems={setMenuItems} />
    </div>
  );
};

export default App;

//jos counteriin
// incrementHandler = () => {
//   props.setValue((prevValue)) => prevValue + 1);
// }
