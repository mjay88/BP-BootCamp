import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import AccordionDropdown from "./AccordionDropDown";

export default function SubAccordion({ submenus, parentIndex }) {
	// const [content, setContent] = useOutletContext();
	// const [data, setData] = useState({});

	const location = useLocation();
	// console.log(location);

	// const handleContent = () => setContent((c) => c.content);
	// console.log(content);
	return (
		<div className="">
			<div className="bg-white rounded-2xl">
				{submenus.map((submenu, index) => {
					return (
						<Disclosure key={index}>
							{({ open }) => (
								<>
									<Link
										to={submenu.url}
										//pass the entires menu through here, then its easy to get previous and next
										state={{
											from: submenu.title,
											url: submenu.url,
											content: submenu.content,
											key: index,
											parentIndex: parentIndex,
											indexInSubmenu: index,
											navTree: submenus,
										}}
									>
										<Disclosure.Button className="flex justify-between w-full px-0 py-1 mb-1 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											{/* button text */}
											<span>{submenu.title}</span>
											{submenu.submenu ? (
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
									</Link>
									{submenu.submenu ? (
										<Disclosure.Panel className="px-1 pt-0 pb-0 text-sm text-gray-500">
											<AccordionDropdown
												submenus={submenu.submenu}
												parentIndex={parentIndex}
												submenuIndex={index}
											></AccordionDropdown>
										</Disclosure.Panel>
									) : (
										<Link
											to={submenu.url}
											// onClick={handleContent(submenu.content)}
											// onClick={setData({ submenu })}
										>
											<Disclosure.Panel className="px-1 pt-0 pb-0 text-sm text-gray-500"></Disclosure.Panel>
										</Link>
									)}
								</>
							)}
						</Disclosure>
					);
				})}
			</div>
		</div>
	);
}
