import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation, useOutletContext } from "react-router-dom";

export default function NestedMobileDropDown({ submenus }) {
	// const [content, setContent] = useOutletContext();
	// const [data, setData] = useState({});

	const location = useLocation();
	// console.log(location);

	// const handleContent = () => setContent((c) => c.content);
	// console.log(content);
	return (
		<div className="max-w-full bg-white rounded-2xl">
			{submenus.map((item, index) => {
				return (
					<Disclosure>
						{({ open }) => (
							<>
								<Link
									to={item.url}
									//
								>
									<Disclosure.Button className="flex justify-between w-full px-0 py-1 mb-1 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
										{/* button text */}
										<span>{item.title}</span>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className={`${
												open ? "rotate-180 transform" : ""
											} h-0 w-0 text-slate-500`}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</Disclosure.Button>
								</Link>
							</>
						)}
					</Disclosure>
				);
			})}
		</div>
	);
}
