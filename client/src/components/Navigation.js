import React from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Navigation() {
	return (
		<div className="w-full flex flex-row justify-evenly">
			{/* <!-- navbar --> */}

			<div className="mb-1 text-xl text-white font-bold duration-300 hover:scale-105 hover:border-b-4 border-orange-400">
				<Link to={"/Home"}>Home</Link>
			</div>

			<div className="mb-1 text-xl text-white font-bold duration-300 hover:scale-105 hover:border-b-4 border-orange-400">
				<Link to={"/progress"}>Progress</Link>
			</div>

			<div className="mb-1 text-xl text-white font-bold duration-300 hover:scale-105 hover:border-b-4 border-orange-400">
				<Link to={"/getHelp"}>Get Help</Link>
			</div>

			<div className="mb-1 text-xl text-white font-bold duration-300 hover:scale-105 hover:border-b-4 border-orange-400">
				Account
			</div>

			{/* <!-- button --> */}
		</div>
	);
}
