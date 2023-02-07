import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import AccordionCopy from "./AccordionCopy";
import MobileDropDown from "./MobileDropDown";

export default function MobileNavigation() {
	// create state variables to track the user with useStates
	return (
		<div className="fixed right-5 top-7 max-w-sm px-4">
			<Popover className="relative ">
				{({ open }) => (
					<>
						<Popover.Button
							className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-slate-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
						>
							<span>Learn</span>
							<ChevronDownIcon
								className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-slate-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
								aria-hidden="true"
							/>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-10 mt-3 max-w-sm -translate-x-1/4 transform px-4 sm:px-0 lg:max-w-sm">
								<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
									<MobileDropDown />
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
}

{
	/* <div className="max-w-xl flex flex-col justify-center">
				<Disclosure key={""}>
					{({ open }) => (
						<>
							<Disclosure.Button
								key={""}
								className="flex justify-between w-full mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-slate-700 rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							>
								Menu
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
							</Disclosure.Button>

							<Disclosure.Panel className="px-0 pt-0 pb-0 text-sm text-gray-500">
								<Disclosure.Button
									key={""}
									className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
								>
									Home
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
								</Disclosure.Button>
								<Disclosure.Button
									key={""}
									className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
								>
									Progress
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
								</Disclosure.Button>
								<Disclosure.Button
									key={""}
									className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
								>
									Get Help
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
								</Disclosure.Button>
								<Disclosure key={""}>
									{({ open }) => (
										<>
											<Disclosure.Button
												key={""}
												className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
											>
												Menu
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
											</Disclosure.Button>

											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
												<Disclosure.Button
													key={""}
													className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
												>
													Home
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
												</Disclosure.Button>
												<Disclosure.Button
													key={""}
													className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
												>
													Progress
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
												</Disclosure.Button>
												<Disclosure.Button
													key={""}
													className="flex justify-between mb-1 px-4 py-2 text-lg font-medium text-center text-slate-300 bg-black rounded-lg hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
												>
													Get Help
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
												</Disclosure.Button>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div> */
}
