import { Disclosure } from "@headlessui/react";
import { sideBarMenuItems } from "../sideBarMenuItems";
import SubAccordion from "./SubAccordion";
import { Link } from "react-router-dom";

export default function AccordionCopy() {
  return (
    <div className="max-w-xl p-2 bg-white rounded-2xl">
      {sideBarMenuItems.map((menuItem, index) => {
        return (
          <div className="max-w-xl">
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <Link to={menuItem.url}>{menuItem.title}</Link>
                    {menuItem.submenu ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-slate-500`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </Disclosure.Button>
                  {menuItem.submenu ? (
                    <Disclosure.Panel className="w-full px-1 pt-0 pb-0 text-sm text-gray-500">
                      <SubAccordion submenus={menuItem.submenu}></SubAccordion>
                    </Disclosure.Panel>
                  ) : (
                    // <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <Link to={menuItem.submenu.url}>{menuItem.title}</Link>
                    // </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          </div>
        );
      })}
    </div>
  );
}
