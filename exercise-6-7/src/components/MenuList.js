import MenuItem from "./MenuItem";

const MenuList = (props) => {
  return (
    <ul>
      {props.menuItems.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          removeHandler={props.removeHandler}
        />
      ))}
    </ul>
  );
};

export default MenuList;
