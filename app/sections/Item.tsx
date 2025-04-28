import { track } from "@vercel/analytics";

export default function Item({
	title,
	description,
	link,
	pubDate,
}: {
	title: string;
	description: string;
	link: string;
	pubDate: string;
}) {
	return (
		<li key={link} className="group max-w-prose text-pretty">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col"
				onClick={(ev) => {
					track("Item Click", {
						href: link,
						text: title,
					});
				}}
			>
				<p className="text-xs dark:text-slate-300 text-slate-500 uppercase">
					{pubDate}
				</p>
				<h3 className="text-lg font-medium uppercase group-hover:underline underline-offset-1 leading-6">
					{title}
				</h3>
				<p className="leading-5 text-slate-500 text-sm line-clamp-3">
					{description}
				</p>
			</a>
		</li>
	);
}
