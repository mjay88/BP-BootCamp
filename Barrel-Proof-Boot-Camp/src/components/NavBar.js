import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
  //create prop

  return (
    <ul className="flex items-center flex-wrap list-none">
      {menuItems.map((menu, index) => {
        const depthLevel = 0;

        return (
          <li className="menu-items" key={index}>
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            ></MenuItems>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
