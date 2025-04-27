import { XMLParser } from "fast-xml-parser";
import { SectionHeading, SectionSubheading } from "../Heading";
import Item from "./Item";

export default async function SFF() {
	const substackRssFeed = await fetch(
		"https://anchor.fm/s/5a53fca0/podcast/rss",
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
				description: item.description.replace(/<[^>]+>/g, ""),
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
					Here: Recent podcasts at <strong>Vintage Sci-Fi Shorts</strong>
				</SectionSubheading>
				<SectionHeading className="border-b-amber-400 hover:underline underline-offset-1">
					<a
						className="block font-mono uppercase hover:underline"
						href="https://open.spotify.com/show/1Hlyr0Dt4Y3A4gP6cbKnYg?si=PHOmrG4zQ3-S-P7yALc3yQ"
						target="_blank"
						rel="noopener noreferrer"
					>
						Speculative Fiction | Vintage Sci-Fi Shorts
					</a>
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
