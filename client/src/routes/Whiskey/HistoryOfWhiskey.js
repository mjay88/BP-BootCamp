import React from "react";
import VodkaBottles from "../../assets/VodkaBottles.jpg";
import ColumnStill from "../../assets/ColumnStill.jpg";
import Martini from "../../assets/Martini.jpg";
import { Link } from "react-router-dom";
import AncientAlembic from "../../assets/Whiskey/AncientAlembic.webp";

export default function HistoryOfWhiskey() {
	return (
		<div className="flex flex-col py-4 px-4">
			<h1 className="flex justify-center my-5 text-lg">History of Whiskey</h1>
			{/* <Module submenus={submenu} /> */}
			<div className="flex flex-col lg:grid grid-cols-4 gap-3">
				<div className="flex-1 lg:col-span-2">
					Over the course of human history, many cultures were producing and
					ingesting alcohol in some way or another. And probably mushrooms too.
					There is evidence of ancient civilizations dating back to 3500 BC
					distilling liquids for medicines and perfumes. As far back as the
					fourth century B.C. Aristotle suggested the possibility of spirit
					distillation when he wrote:
					<br></br>
					<br></br>
					"Seawater can be made potable by distillation as well and wine and
					other liquids can be submitted to the same process."
					<br></br>
					<br></br>
					The first distillation processes were probably done with water that
					had been steeped with flowers and herbs and other good smelling things
					or stimulating plants or other things to try and make perfumes and
					medicines- with the distillation of wine and beer probably following
					shortly after. ‘Alcohol’ and ‘alembic’ (a type of still) are both
					derived from the Arabic, but there is archeological evidence
					suggesting that distillation may have originated from ancient China,
					Egypt, or Mesopotamia. If you ask someone from Scotsman or Irishman
					they might tell you something different...
				</div>
				<div className="flex-1 lg:col-span-2 row-span-3 text-center">
					<img className="object-contain mb-2" src={AncientAlembic} />
					<span>Diagram of an Ancient Alembic Still</span>
				</div>

				<div className="flex-1 col-span-2">
					People seemed to like the stuff that was coming out of their stills,
					so the practice continued as people moved about and societies and
					civilizations came and went. Eventually they got better and better at
					it, till we get to modern times where distinct styles of spirits are
					associated with different cultures across the globe.
					<br></br>
					<br></br>
					The present day name "whiskey" is attributed to either Scottich Celtic
					words "uisge beatha" or the Irish Celtic term uige baugh (pronounced
					whis-geh-BAW), both of which mean "water of life" or, as some scholars
					belive, "lively water".
				</div>
				<div className="flex-1 col-span-2">
					{" "}
					It is interesting to note that in early times, when alchemist were
					searching for extended and healthy lives, spirits where commonly (and
					interchangeably) called "water of life", "aqua vitae", and "uisge
					baugh." When the product was brougth to England, the English found the
					celtic word too difficult to pronounce, so they anglicized to whiskey.
				</div>
				<div className="flex-1 lg:col-span-4"></div>
				<div className="col-span-4"></div>
				<div className="col-span-2 row-span-3">
					{/* <img
						src={ColumnStill}
						alt="column still for producing alcohol"
						className="object-contain"
					/> */}
				</div>
				{/* <div className="col-span-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					asperiores, molestias consequatur quisquam numquam eligendi doloribus
					odio sapiente vitae voluptates ducimus libero error atque facere
					pariatur optio, similique incidunt quis.
				</div>
				<div className="col-span-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					asperiores, molestias consequatur quisquam numquam eligendi doloribus
					odio sapiente vitae voluptates ducimus libero error atque facere
					pariatur optio, similique incidunt quis. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Voluptatibus asperiores, molestias
					consequatur quisquam numquam eligendi doloribus odio sapiente vitae
					voluptates ducimus libero error atque facere pariatur optio, similique
					incidunt quis. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Voluptatibus asperiores, molestias consequatur quisquam numquam
					eligendi doloribus odio sapiente vitae voluptates ducimus libero error
					atque facere pariatur optio, similique incidunt quis.
				</div>
				<div className="col-span-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					asperiores, molestias consequatur quisquam numquam eligendi doloribus
					odio sapiente vitae voluptates ducimus libero error atque facere
					pariatur optio, similique incidunt quis.
				</div>
				<div className="col-span-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					asperiores, molestias consequatur quisquam numquam eligendi doloribus
					odio sapiente vitae voluptates ducimus libero error atque facere
					pariatur optio, similique incidunt quis. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Voluptatibus asperiores, molestias
					consequatur quisquam numquam eligendi doloribus odio sapiente vitae
					voluptates ducimus libero error atque facere pariatur optio, similique
					incidunt quis.
				</div>
				<div className="col-span-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					asperiores, molestias consequatur quisquam numquam eligendi doloribus
					odio sapiente vitae voluptates ducimus libero error atque facere
					pariatur optio, similique incidunt quis. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Voluptatibus asperiores, molestias
					consequatur quisquam numquam eligendi doloribus odio sapiente vitae
					voluptates ducimus libero error atque facere pariatur optio, similique
					incidunt quis.
				</div>
				<div className="col-span-1">
					<img
						src={Martini}
						alt="Image of a dirty vodka martini with 3 olives in it"
						className="object-fit"
					/>
				</div>
				<div className="col-span-3">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
					doloribus cum corporis recusandae veritatis incidunt distinctio
					dignissimos laboriosam fugiat officiis? Laboriosam odio, natus eius
					ipsa veritatis reiciendis qui quam molestias? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Maiores in laudantium possimus
					tempore fugit eaque sed saepe! Ut odio expedita dolores quisquam
					dolorum pariatur dolor possimus neque, distinctio, aut quo! Lorem
					ipsum, dolor sit amet consectetur adipisicing elit. Minus doloribus
					cum corporis recusandae veritatis incidunt distinctio dignissimos
					laboriosam fugiat officiis? Laboriosam odio, natus eius ipsa veritatis
					reiciendis qui quam molestias?
					<br></br>
					<br></br>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
					laudantium possimus tempore fugit eaque sed saepe! Ut odio expedita
					dolores quisquam dolorum pariatur dolor possimus neque, distinctio,
					aut quo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Minus doloribus cum corporis recusandae veritatis incidunt distinctio
					dignissimos laboriosam fugiat officiis? Laboriosam odio, natus eius
					ipsa veritatis reiciendis qui quam molestias? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Maiores in laudantium possimus
					tempore fugit eaque sed saepe! Ut odio expedita dolores quisquam
					dolorum pariatur dolor possimus neque, distinctio, aut quo!
					<br></br>
					<br></br>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
					laudantium possimus tempore fugit eaque sed saepe! Ut odio expedita
					dolores quisquam dolorum pariatur dolor possimus neque, distinctio,
					aut quo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Minus doloribus cum corporis recusandae veritatis incidunt distinctio
					dignissimos laboriosam fugiat officiis? Laboriosam odio, natus eius
					ipsa veritatis reiciendis qui quam molestias? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Maiores in laudantium possimus
					tempore fugit eaque sed saepe! Ut odio expedita dolores quisquam
					dolorum pariatur dolor possimus neque, distinctio, aut quo!
				</div>

				<div className="col-span-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
					doloribus cum corporis recusandae veritatis incidunt distinctio
					dignissimos laboriosam fugiat officiis? Laboriosam odio, natus eius
					ipsa veritatis reiciendis qui quam molestias? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Maiores in laudantium possimus
					tempore fugit eaque sed saepe! Ut odio expedita dolores quisquam
					dolorum pariatur dolor possimus neque, distinctio, aut quo!
				</div>
				<div className="col-span-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
					doloribus cum corporis recusandae veritatis incidunt distinctio
					dignissimos laboriosam fugiat officiis? Laboriosam odio, natus eius
					ipsa veritatis reiciendis qui quam molestias? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Maiores in laudantium possimus
					tempore fugit eaque sed saepe! Ut odio expedita dolores quisquam
					dolorum pariatur dolor possimus neque, distinctio, aut quo!
				</div>
				<div className="col-span-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
					doloribus cum corporis recusandae veritatis incidunt distinctio
					dignissimos laboriosam fugiat officiis? Laboriosam odio, natus eius
					ipsa veritatis reiciendis qui quam molestias? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Maiores in laudantium possimus
					tempore fugit eaque sed saepe! Ut odio expedita dolores quisquam
					dolorum pariatur dolor possimus neque, distinctio, aut quo!
				</div> */}
			</div>
			<div className="flex justify-between left-0 bottom-25 max-w-sm px-4 my-10 self-center">
				<Link to={"/production-of-whiskey"}>
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
				</Link>
			</div>
		</div>
	);
}
