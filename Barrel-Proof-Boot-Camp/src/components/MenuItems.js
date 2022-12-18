import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    // { use the useRef to access the DOM elements of the dropdown by passing a reference object to the target node}
    <li className="menu-items" ref={ref}>
      {/**if items, which is passed from Navbar has a submenu properties, render a Dropdown component that takes in the submenu data */}
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {/* {depthLevel greater than 0, we display a right arrow using an HTML entity name, &raquo;, else we add an .arrow class name to style a custom down arrow. In our stylesheet, we added the styles for the down arrow. */}
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

          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        /*if no submenu property exists, just render the menu item as a link*/
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
