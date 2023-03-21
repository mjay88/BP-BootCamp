import React from "react";
import Rudimentarystill from "../../assets/Whiskey/Rudimentarystill.png";
import Barley from "../../assets/Whiskey/Barley.png";
import tattersallstill from "../../assets/Whiskey/tattersallstill.jpg";
import toastedandcharredbourbonbarrels from "../../assets/Whiskey/toasted-and-charred-bourbon-barrels.webp";

import { Link } from "react-router-dom";

export default function ProductionOfWhiskey() {
	return (
		<div className="flex flex-col justify-items-center py-4 px-4">
			<h1 className="flex justify-center my-5 text-lg font-semibold">
				Production of Whiskey
			</h1>
			{/* <Module submenus={submenu} /> */}
			<div className="flex flex-col lg:grid grid-cols-4 gap-3">
				<div className="flex-1 lg:col-span-4">
					Whiskey, or whisky, (the spelling “Whisky” is used by Japanese
					producers and sometimes others simply as a colloquial or regional
					spelling preference) in America is defined by the TTB (The Alcohol and
					Tobacco Tax and Trade Bureau, known as the Tax and Trade Bureau and
					frequently shortened to TTB, is a government body that regulates the
					sell of alcohol, tobacco, and firearms within the United States) as -
					the product of distilling grain at no more than 94.9% (can't go over
					the ceiling of 95% ethanol by volume, that’s airplane fuel), stored in
					oak containers for an unspecified amount of time, and bottled at no
					less than 40% (80 proof). The EU’s designation is pretty much the same
					thing, except you can use any type of wooden container, and those
					wooden containers can’t be bigger than 700 liters
				</div>
				<div className="flex flex-col lg:col-span-2 row-span-3 text-center">
					<img className="object-contain mb-2" src={Rudimentarystill} />
					<span>Poteen Still probably from 16th century, Scotland</span>
				</div>

				<div className="flex-1 col-span-2">
					So in its simplest definition, whiskey is just a spirit made from
					grains that spends some time in wood.
				</div>
				<div className="flex-1 col-span-2">
					Whiskey production follows 5 basic steps :
					<ul className="list-disc ml-7">
						<li>Mash </li>
						<li>Fermentation</li>
						<li>Maturation</li>
						<li>Blending</li>
						<li> Bottling</li>
					</ul>
				</div>

				<div className="flex-1 lg:col-span-2">
					The simplest way of describing how whiskey is made is taking beer made
					from grains and concentrating it to something stronger than what you
					started with. If you were to boil a big ass pot of beer on your stove
					and then collect all the condensation that forms on your oven vents
					somehow that's basically the same idea. But wait, how is beer made
					again…
				</div>
				<div className="col-span-4">
					Note on Water : Water is used throughout the entire whiskey making
					process, so the quality of water used will have a big impact on its
					flavor. You may come across terms like “Limestone water”, “spring
					water”, “mountain water”. Any water that comes from a ‘natural’ water
					source, ie, mountains, aquifers, springs, typically will be ‘hard’,
					meaning it contains naturally occurring minerals like magnesium and
					calcium. It’s water with a lot of flavor, think Pelligrino, Voss,
					Liquid Death. ‘Soft’ will have less of these minerals, so its flavor
					will be more neutral. Some producers like using hard water, others
					prefer soft, and some use it as a marketing tagline.
				</div>
				<div className="col-span-4">
					You can’t make whiskey from boiling a pot of Coors light on your
					stove, well maybe you can, if you wanted to try really hard and had a
					lot of free time, maybe... At an industrial level the process is
					similar though. When making whiskey, you always gotta start with some
					type of grain, typically barley, corn, rye, wheat and some others
					thrown in there to shake things up sometimes. Once a distiller decides
					what proportions of each respective grain they want, in the business,
					this recipe is then referred to as a mash bill.
				</div>
				<div className="col-span-4">
					Mash bills : A mash bill or grain bill refers to the proportions of
					respective grains used to make mash. To be labeled bourbon, a mash
					bill must contain at least 51% corn. In reality, an actual bourbon
					mash bill might look something like 75% corn, and the rest of the
					recipe is typically split between rye and barley. If we know the mash
					bill, we can make some assumptions about the flavor profile of a
					whiskey, as the mash bill is one way to differentiate styles of
					whiskey
				</div>
				<div className="col-span-4">
					All grains consist mostly of starch (laundry starch is made of grain
					juices), but to get alcohol you have to convert those starches into
					sugar. This is accomplished by malting.
				</div>

				<div className="flex-1 lg:col-span-2">
					<h1 className="flex-1 lg:col-span-2 text-center my-5 text-lg font-semibold">
						WTF is Malting?
					</h1>
					A fair question indeed. Malting is simply prepping the grain in such a
					way that you get it to sprout. Just like in elementary school with the
					plastic ziplock bag and the wet paper towel. Barley is typically the
					only grain that is malted when producing whiskey, though some other
					producers -Old Portero 100% malted Rye- malt other grains for their
					delicious rye whiskey. I’m no chemist, but there’s something
					special/black magic specifically about malted barley that is all but
					necessary for the fermentation stage to take place.
					<br></br>
					<br></br>
					Nerdy definition of malting process : “[Soaking in water] causes the
					grain to sprout, which releases two enzymes-alpha amylase and beta
					amylase...These enzymes break down the carbohydrates in the grain into
					double or triple molecules, thereby producing maltose, a disaccharide.
					The maltose will then further break down into fermentable
					single-molecule sugars (monosaccharides).”
					<br></br>
					<br></br>A relatively small proportion of barley in a mash bill (for
					american whiskey producers a typical bourbon mash bill will contain
					around less than 15% malted barley) is sufficient to convert the
					starch in any other grains present into fermentable sugar.
				</div>
				<div className="flex-1 lg:col-span-2 row-span-3 text-center">
					<img className="object-contain mb-2" src={Barley} />
					<span>
						Barley is a necessary ingredient for the fermentation process.
					</span>
				</div>

				<div className="col-span-4">
					After you get your barley good and malted, the next step is kilning,
					where the germinated grain is heated to stop the malting process. The
					time spent in the kiln and temperature is considered as a way to add
					additional flavors to the finished product as well, causing
					caramelization of the sugars resulting from the malting process.(Like
					roasting coffee beans; dark roast versus light roast)
					<br></br>
					<br></br>After the kiln the malt is milled to a pretty coarse grind.
				</div>
				<div className="col-span-4">
					Next up, the mashing phase. The ground grains and other
					non-malted-non-kilned-non-milled grains are added to hot water
					typically heated to somewhere between 130 degrees fahrenheit and 170
					degrees fahrenheit. This giant pot in the whiskey business is referred
					to as a mash cooker in the U.S. and a mash tun in Europe. This grain
					soup is then cooked until the enzymes released from the malting
					process finish converting all the remaining starches to sugar.
				</div>
				<div className="col-span-4">
					In certain cases the sugary soup is then “washed” from all the spent
					grain and grist before the fermentation process begins. In America,
					this thick slurry does not get separated from the liquid and is
					referred to as “cook” or “mash”.
				</div>
				<div className="col-span-4">
					Side note - obviously all of the ingredients in a recipe will affect
					the end product, water being no exclusion. Since water is used during
					much of the whiskey making process, it follows that distillers would
					pay extra consideration to the quality of water they are using. Water
					contains all sorts of minerals like calcium, sodium, magnesium, and
					other phosphates. Water high in iron has been known to give the final
					matured whiskey a brackish hue, not ideal. In Scotland’s mountainous
					stream’s- who’s watersheds are filtered through peat deposits- are
					soft and ideal for a mostly barley distillate while in the south
					central United States around Kentucky the limestone water there has
					been found to provide nutrients for fermenting yeast. Either way, a
					high quality water source has an important impact on the resulting
					whiskeys profile.
				</div>
				<div className="col-span-4">
					<h1 className="flex-1 lg:col-span-2 text-center my-5 text-lg font-semibold">
						Fermentation
					</h1>
					The mash is then transferred to fermentation vats, and either a
					cultivated yeast or proprietary yeast is thrown in to initiate
					fermentation. These vats are typically made of stainless steel or
					wood, can be closed containers or open, and can be relatively small or
					hold up to 20,000 gallons. The fermentation process can take from 40
					to 70 hours, and is considered done when the sweetness of the mash
					becomes slightly acidic, and the alcohol content is between 5%-10% by
					volume.
				</div>
				<div className="flex flex-col lg:col-span-2 row-span-3 text-center">
					<img className="object-contain mb-2" src={tattersallstill} />
					<span>Column Still at Tattersall, Minnesota</span>
				</div>

				<div className="flex-1 col-span-2">
					<h1 className="flex-1 lg:col-span-2 text-center my-5 text-lg font-semibold">
						Distillation
					</h1>
					Next, this beer-like liquid is put through the still. The still can
					either be a continuous-column still or a pot still. Column stills
					result in a lighter bodied product with a higher ABV, which is most
					often used to create the lighter qualities in a blended whiskey's
					profile. Pot distillation usually takes two passes to bring the abv to
					the desired level. Pot distillation is less efficient but produces a
					richer, heavier spirit with more of the characteristics of the cooked
					grains in the mash bill being apparent. Pot stills are usually made
					from copper which acts as a catalyst during the distillation process.
					As vapors pass through the still, the copper pulls heavy elements away
					from them. After distillation the collected “high wines” or “new make
					spirit” or “white dog” is typically diluted with water to reduce the
					abv to just above 60% abv or around 125 proof.
				</div>

				<div className="flex-1 col-span-4">
					<h1 className="flex-1 lg:col-span-2 text-center my-5 text-lg font-semibold">
						Maturation in Wood
					</h1>
					A thing that sets whiskey apart from a lot of other spirits is that it
					MUST be rested in wood for some period of time. Different places have
					different requirements as to the parameters of the barrels used
					including the species of oak being used, and the size of the barrels.
				</div>
				<div className="flex-1 col-span-4">
					A lot happens while the spirit is resting in a wooden barrel...
				</div>
				<div className="flex-1 col-span-4">
					As the outside temperature rises and warms the spirit, it expands and
					is forced into the barrel staves; as the outside temperature lowers,
					the spirit retracts into the barrel. The greater the change in
					temperature, the greater the effect it will have on the maturated
					spirits profile.
				</div>
				<div className="flex-1 col-span-4">
					<span className="font-semibold">Evaporation : </span>Both water and
					alcohol will evaporate through the pores of the barrel, resulting in a
					loss of volume. Depending on the ambient temperature and humidity
					levels, the alcohol percentage in the maturing spirit will either
					increase or decrease. This lost percentage of spirit is commonly
					referred to as the angels share.
				</div>
				<div className="flex-1 col-span-4">
					<span className="font-semibold">Oxidation : </span>Air drawn into the
					barrel during the evaporation process slowly oxidizes the spirit’s
					components and contributes to its reddish/golden hue.
				</div>
				<div className="flex-1 col-span-4">
					<span className="font-semibold">Extraction : </span>
					The spirit extracts aromas, flavors, and tannins from the staves of
					the oak.
				</div>
				<div className="flex-1 col-span-4">
					<span className="font-semibold">Coloration : </span>
					The spirit oxidizes while in the barrel, contributing to whiskey's
					golden/reddish hue.
				</div>
				<div className="flex-1 col-span-4">
					<span className="font-semibold">Concentration : </span>
					All of the chemical, physical, and extractive processes are
					concentrated in the decreasing volume of whiskey because of
					evaporation through, and soakage into, the wooden barrel.
				</div>
				<div className="flex-1 col-span-4">
					<span className="font-semibold">Filtration : </span>
					If the barrel has been charred, then the interior of the barrel can
					act like an activated charcoal filter, absorbing some compounds and
					smoothing the spirit.
				</div>
				<div className="flex-1 lg:col-span-2">
					<h1 className="flex-1 lg:col-span-2 text-center my-5 text-lg font-semibold">
						WTF is Malting?
					</h1>
					Other noteworthy maturation variables include, the type of oak used
					-American or European(limousine) are typical but not exclusive-, how
					the wood was dried and other conditioning methods such as weather
					conditioning, whether the inside of the barrel was toasted or not,
					whether the barrel previously held anything else(see Angels Envy),
					what materials the storage warehouse is made of, if its temperature is
					controlled or not, regional weather conditions such as how cold and
					hot it gets and humidity levels, if the building has multiple stories,
					where a barrel is specifically located in that warehouse and how long
					the spirit spends in the barrel all have an effect on the final
					profile of the spirit.
					<br></br>
					<br></br>
					In general most European whiskey requires a longer maturation period
					than whiskeys matured in the southern central US climates of Kentucky
					or Tennessee. Scotland's overall temperature is mild temp and humidity
					wise, compared to very hot summers and cold winters that Kentucky and
					Tennessee get. Some experts estimate that for every year of aging in
					Kentucky or Tennessee, it takes well over three years of aging in the
					climate of Scoland or Ireland to achieve the same results. And
					whiskeys coming from Taiwan or other tropical areas can take on an
					enormous amount of complexity in just a few years of maturing barrels
					due to the climate. All that being said, the oldest whiskey doesn’t
					mean the best whiskey.
				</div>
				<div className="flex-1 lg:col-span-2 row-span-3 text-center">
					<img
						className="object-contain mb-2"
						src={toastedandcharredbourbonbarrels}
					/>
					<span>The process of charring barrels</span>
				</div>
			</div>
			<div className="flex justify-between left-0 bottom-25 max-w-sm px-4 my-10 self-center">
				<Link to={"/history-of-whiskey"}>
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
				</Link>
				<Link to={"/scotch-whiskey"}>
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
