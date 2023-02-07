export default function PreviousAndNext() {
	return (
		<div className="flex flex-col py-4 px-4">
			<h1 className="self-center"></h1>

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
}
