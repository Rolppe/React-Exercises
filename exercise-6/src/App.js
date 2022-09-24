import "./components/Menu.css";
import Counter from "./components/Counter.js";
import MenuItem from "./components/MenuItem";
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

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const incrementHandler1 = () => {
    setValue1(value1 + 1);
  };
  const incrementHandler2 = () => {
    setValue2(value2 + 1);
  };

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

      <Counter value={value1} incrementHandler={incrementHandler2} />
      <Counter value={value2} incrementHandler={incrementHandler1} />
    </div>
  );
};

export default App;

//jos counteriin
// incrementHandler = () => {
//   props.setValue((prevValue)) => prevValue + 1);
// }
