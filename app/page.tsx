import BoardGames from "./sections/BoardGames";
import { JumpLink } from "./Heading";
import Soccer from "./sections/Soccer";
import SFF from "./sections/SFF";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 min-h-screen divide-y-4 divide-slate-400">
			<div className="p-16 grid md:grid-flow-col grid-cols-[1fr,auto] gap-4 items-center">
				<h1 className="text-4xl font-bold">Matt Montgomery</h1>
				<nav className="flex md:justify-end items-center">
					<ul className="flex space-x-4 md:space-x-0 max-md:flex-col">
						<li>
							<JumpLink href="#board-games">Board Games</JumpLink>
						</li>
						<li>
							<JumpLink href="#soccer">Soccer</JumpLink>
						</li>
						<li>
							<JumpLink href="#sff">Sci-Fi</JumpLink>
						</li>
						{/* <li>
							<JumpLink href="#photography">Photography</JumpLink>
						</li> */}
					</ul>
				</nav>
			</div>
			<div className="p-16 grid grid-flow-row gap-16">
				<section id="board-games">
					<BoardGames />
				</section>
				<section id="soccer">
					<Soccer />
				</section>
				<section id="sff">
					<SFF />
				</section>
				{/* <section id="photography">
					<BoardGames />
				</section> */}
			</div>
		</div>
	);
}
