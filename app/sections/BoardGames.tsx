import { XMLParser } from "fast-xml-parser";
import { SectionHeading, SectionSubheading } from "../Heading";
import Item from "./Item";

export default async function BoardGames() {
	const substackRssFeed = await fetch(
		"https://donteatthemeeples.substack.com/feed",
		{
			next: { revalidate: 60 * 60 }, // 1 hour
		},
	).catch((error) => {
		console.error("Error fetching RSS feed:", error);
		return null;
	});
	if (!substackRssFeed) {
		return <div>Error fetching RSS feed</div>;
	}
	const feedText = await substackRssFeed.text();

	const parser = new XMLParser();
	const feed = parser.parse(feedText);
	const posts: {
		title: string;
		description: string;
		link: string;
		pubDate: string;
	}[] = feed.rss.channel.item.map(
		(item: {
			title: string;
			description: string;
			link: string;
			pubDate: string;
		}) => ({
			title: item.title,
			description: item.description,
			link: item.link,
			pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
		}),
	);
	return (
		<section id="board-games">
			<div className="flex flex-col mb-2 gap-2">
				<SectionSubheading>
					Here: Recent newsletters from <strong>Don’t Eat the Meeples</strong>
				</SectionSubheading>
				<SectionHeading className="block font-mono uppercase hover:underline">
					<a href="https://donteatthemeeples.substack.com">Board Games</a>
				</SectionHeading>
			</div>
			<ul className="list-none grid grid-flow-row gap-8">
				{posts.map((post) => (
					<Item
						key={post.link}
						description={post.description}
						link={post.link}
						pubDate={post.pubDate}
						title={post.title}
					/>
				))}
			</ul>
		</section>
	);
}
