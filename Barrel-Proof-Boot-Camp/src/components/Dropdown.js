import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index}></MenuItems>
      ))}
    </ul>
  );
};

export default Dropdown;
