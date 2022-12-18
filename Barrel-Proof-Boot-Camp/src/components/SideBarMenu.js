import { useState, useEffect, useRef } from "react";
import Accordion from "./Accordion";

const SideBarMenu = ({ items }) => {
  const [accordion, setAccordion] = useState(false);

  // let ref = useRef();

  // useEffect(() => {
  //   const handler = (event) => {
  //     if (accordion && ref.current && !ref.current.contains(event.target)) {
  //       setAccordion((prev) => !prev);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   document.addEventListener("touchstart", handler);
  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener("mousedown", handler);
  //     document.removeEventListener("touchstart", handler);
  //   };
  // }, [accordion]);

  return (
    <li className="menu-items" >
      {/**if items, which is passed from Navbar has a submenu properties, render a Dropdown component that takes in the submenu data */}
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={accordion ? "true" : "false"}
            onClick={() => setAccordion((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Accordion submenus={items.submenu} accordion={accordion} />
        </>
      ) : (
        /*if no submenu property exists, just render the menu item as a link*/
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default SideBarMenu;
