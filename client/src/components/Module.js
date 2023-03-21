import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { sideBarMenuItems } from "../sideBarMenuItems";
import { useState } from "react";

const Module = () => {
	const location = useLocation();
	// const [parentIndex, setParentIndex] = useState(location.state.parentIndex);
	// const [indexInSubmenu, setIndexInSubmenu] = useState(
	// 	location.state.indexInSubmenu
	// );
	//need to get the url from next and previous index of sideBarMenuItems
	//need to be able to render route by using url, how will this work with module component?

	//findcurrentindex is actual find current submenu index, we will need to create another state for the index of outer nav, vodka, gin
	//rum, ect...then we can easily navigate preceding and next by sidebarmenuitems[idx]submenu[idx]

	console.log(location.pathname, "location");
	console.log(location, "21");
	const content = location.state.content;
	console.log(content, "content");
	//use findCurrentIndex to find the index of the location : pathname in sideBarMenuItems to set preceding and next
	//if preceding returns undefined, reset preceding via another function that gets the index of the next section over ie first slide in gin -> last slide in vodka || dont do this at all and you can only navigate between gin and vodka from sidenav...
	//|| find a way to set tree up from sideBarMenuItems, then it would be easy to get next and previous...see line 13
	// console.log(parentIndex);

	return (
		<div className="flex flex-col py-4 px-4">
			<h1 className="self-center">{location.state.from}</h1>
			{content === undefined ? (
				<div>Sorry</div>
			) : (
				content.map((item, index) => {
					return (
						<>
							<div className="flex">
								{item.slice(-3) === "jpg" ? (
									<img className="object-contain" src={item} />
								) : (
									<div className="flex-1" key={index}>
										{item}
									</div>
								)}
							</div>
							;
						</>
					);
				})
			)}
			<div className="flex justify-between left-0 bottom-25 max-w-sm px-4 self-center">
				<button
					className={`
                group inline-flex items-center rounded-md bg-slate-700 px-3 py-2 mx-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
						/>
					</svg>
					<span>Previous </span>
				</button>
				<button
					className={`
                group inline-flex items-center rounded-md bg-slate-700 px-3 py-2 mx-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
				>
					<span>Next </span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Module;
