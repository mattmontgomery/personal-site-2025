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
		<li
			key={link}
			className="group border-l-4 border-l-transparent hover:border-l-white -ml-5 pl-4"
		>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col gap-1"
			>
				<p className="text-xs text-slate-500 uppercase">{pubDate}</p>
				<h3 className="text-lg font-medium uppercase group-hover:underline underline-offset-1">
					{title}
				</h3>
				<p className="line-clamp-2">{description}</p>
			</a>
		</li>
	);
}
