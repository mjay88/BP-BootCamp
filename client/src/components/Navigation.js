import React from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { menuItems } from "../menuItems";

export default function Navigation() {
	return (
		<div className="w-full flex flex-row justify-evenly">
			{/* <!-- navbar --> */}
			{menuItems.map((item, index) => {
				return (
					<>
						<div className="mb-1 text-xl text-white font-bold duration-300 hover:scale-105 hover:border-b-4 border-orange-400">
							<Link to={item.url}>{item.title}</Link>
						</div>
					</>
				);
				{
					/* <!-- button --> */
				}
			})}
		</div>
	);
}
