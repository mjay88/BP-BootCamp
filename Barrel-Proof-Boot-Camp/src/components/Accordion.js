import SideBarMenu from "./SideBarMenu";

const Accordion = ({ submenus, accordion }) => {
  return (
    <ul className={`accordion ${accordion ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <SideBarMenu items={submenu} key={index}></SideBarMenu>
      ))}
    </ul>
  );
};

export default Accordion;
