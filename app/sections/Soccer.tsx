import { XMLParser } from "fast-xml-parser";
import { SectionHeading, SectionSubheading } from "../Heading";
import Item from "./Item";

export default async function Soccer() {
	const substackRssFeed = await fetch("https://wasatch.soccer/rss.xml", {
		next: { revalidate: 60 * 60 }, // 1 hour
	}).catch((error) => {
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
	}[] = feed.rss.channel.item
		.filter(
			(item: Record<string, string>) =>
				item["dc:creator"] === "Matt Montgomery",
		)
		.map(
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
			<div className="flex flex-col gap-2 mb-2">
				<SectionSubheading>
					Here: Recent articles at <strong>Wasatch Soccer Sentinel</strong>
				</SectionSubheading>
				<SectionHeading className="border-b-amber-400 hover:underline underline-offset-1">
					<a href="https://wasatch.soccer">Soccer | Wasatch Soccer Sentinel</a>
				</SectionHeading>
				<a
					className="block font-mono rounded-md uppercase transition-colors duration-200 ease-in-out hover:underline"
					href="https://wasatch.soccer"
					target="_blank"
					rel="noopener noreferrer"
				>
					Read More
				</a>
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
