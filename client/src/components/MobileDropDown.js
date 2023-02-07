import { Disclosure } from "@headlessui/react";
import { menuItems } from "../menuItems";
import { Link } from "react-router-dom";
import NestedMobileDropDown from "./NestedMobileDropDown";

export default function MobileDropDown() {
	return (
		<div className="max-w-sm p-2 bg-white rounded-2xl">
			{menuItems.map((item, index) => {
				return (
					<div className="max-w-sm">
						<Disclosure key={index}>
							{({ open }) => (
								<>
									<Disclosure.Button
										key={index}
										className="flex justify-between w-full mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
									>
										{item.title}
										{item.submenu ? (
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
									{item.submenu ? (
										<Disclosure.Panel className="max-w-sm px-1 pt-0 pb-0 text-sm text-gray-500">
											<NestedMobileDropDown
												submenus={item.submenu}
											></NestedMobileDropDown>
										</Disclosure.Panel>
									) : (
										""
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
