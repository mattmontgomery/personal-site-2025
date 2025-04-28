import BoardGames from "./sections/BoardGames";
import { JumpLink, SectionHeading, SectionSubheading } from "./Heading";
import Soccer from "./sections/Soccer";
import SFF from "./sections/SFF";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 min-h-screen divide-y-4 divide-slate-400">
			<div className="grid md:grid-flow-col grid-cols-[1fr,auto] gap-4 items-center">
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
			<div className="grid grid-flow-row gap-16">
				<section id="board-games">
					<SectionSubheading>
						Recent articles at <strong>Don't Eat the Meeples</strong>
					</SectionSubheading>
					<SectionHeading className="border-b-amber-400 hover:underline underline-offset-1">
						<a
							href="https://donteatthemeeples.substack.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Board Games | <strong>Don't Eat the Meeples</strong>
						</a>
					</SectionHeading>
					<BoardGames />
				</section>
				<section id="soccer">
					<SectionSubheading>
						Recent articles at <strong>Wasatch Soccer Sentinel</strong>
					</SectionSubheading>
					<SectionHeading className="border-b-amber-400 hover:underline underline-offset-1">
						<a
							href="https://wasatch.soccer"
							target="_blank"
							rel="noopener noreferrer"
						>
							Soccer | <strong>Wasatch Soccer Sentinel</strong>
						</a>
					</SectionHeading>
					<Soccer />
				</section>
				<section id="sff">
					<SectionSubheading>
						Recent podcasts at{" "}
						<strong>Speculative Fiction | Vintage Sci-Fi Shorts</strong>
					</SectionSubheading>
					<SectionHeading className="border-b-amber-400 hover:underline underline-offset-1">
						<a
							href="https://open.spotify.com/show/1Hlyr0Dt4Y3A4gP6cbKnYg?si=PHOmrG4zQ3-S-P7yALc3yQ"
							target="_blank"
							rel="noopener noreferrer"
						>
							Speculative Fiction | <strong>Vintage Sci-Fi Shorts</strong>
						</a>
					</SectionHeading>
					<SFF />
				</section>
				{/* <section id="photography">
					<BoardGames />
				</section> */}
			</div>
		</div>
	);
}
