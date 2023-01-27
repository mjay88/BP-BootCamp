import React from "react";
import { sideBarMenuItems } from "../sideBarMenuItems";

const Module = (props) => {
	console.log(props);
	return (
		<div className="flex flex-col py-4 px-4">
			<>
				<h1>Working?</h1>
			</>
			{/* {submenus.map((submenu, index) => {
				return (
					<>
						<h1 className="flex justify-center my-5 text-lg">
							{submenu.title}
						</h1>
						<div className="flex flex-col lg:grid grid-cols-4 gap-3">
							{submenu.content}
						</div>
						;
					</>
				);
			})} */}
		</div>
	);
};

export default Module;
