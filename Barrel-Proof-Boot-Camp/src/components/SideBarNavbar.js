import { sideBarMenuItems } from "../sideBarMenuItems";
import SideBarMenu from "./SideBarMenu";

const SideBarNavBar = () => {
  return (
    <ul className="sidebar-items max-w-sm">
      {sideBarMenuItems.map((menu, index) => {
        return (
          <li className="menu-items" key={index}>
            <SideBarMenu items={menu} key={index}></SideBarMenu>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBarNavBar;
