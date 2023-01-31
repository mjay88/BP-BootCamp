import React from "react";
import { useLocation } from "react-router-dom";

const Module = () => {
	const location = useLocation();

	console.log(location);
	const content = location.state.content;
	// console.log(content, "content");

	console.log(content);

	return (
		<div className="flex flex-col py-4 px-4">
			<h1>{location.state.from}</h1>
			{content.map((item, index) => {
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
			})}
		</div>
	);
};

export default Module;
