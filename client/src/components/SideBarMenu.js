import { useState, useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const SideBarMenu = ({ items, depthLevel }) => {
  const [accordion, setAccordion] = useState(false);
  // we will use the useRef to access the DOM elements of the dropdown by passing a reference object to the target node
  let ref = useRef();
  //check if a dropdown is open and then check if the DOM node that is being clicked is outside of the dropdown, then we close the dropdown.
  useEffect(() => {
    const handler = (event) => {
      if (accordion && ref.current && !ref.current.contains(event.target)) {
        setAccordion((prev) => !prev);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [accordion]);
  // console.log(depthLevel);
  //toggle droppdown for mouse hover on large screens
  const onMouseEnter = () => {
    window.innerWidth > 960 && setAccordion(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setAccordion(false);
  };
  //close dropdown when link in dropdown clicked
  const closeDropdown = () => {
    accordion && setAccordion(false);
  };

  return (
    <li
      className="menu-items"
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {/**if items, which is passed from SideBarNavbar has a submenu properties, render a Accordion component that takes in the submenu data */}
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={accordion ? "true" : "false"}
            onClick={() => setAccordion((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}
            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
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
