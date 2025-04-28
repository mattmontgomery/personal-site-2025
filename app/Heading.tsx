"use client";

import type { HTMLProps } from "react";

export function SectionHeading(props: HTMLProps<HTMLHeadingElement>) {
	return (
		<h3
			{...props}
			className={`text-2xl font-sans uppercase border-b-2 underline-offset-2 sticky top-0 bg-white dark:bg-black pb-4 mb-4 tracking-tighter ${props.className}`}
		/>
	);
}
export function SectionSubheading(props: HTMLProps<HTMLHeadingElement>) {
	return (
		<h4
			className="text-sm font-sans tracking-tighter uppercase text-slate-800 dark:text-slate-300"
			{...props}
		/>
	);
}

export function JumpLink(props: HTMLProps<HTMLButtonElement>) {
	return (
		<button
			{...props}
			type="button"
			className={`block text-sm p-2 uppercase hover:underline underline-2 cursor-pointer ease-in-out ${props.className}`}
			onClick={(ev) => {
				ev.preventDefault();
				if (!props.href) {
					return;
				}
				const target = document.querySelector(props.href);
				if (target) {
					target.scrollIntoView({
						behavior: "smooth",
						block: "start",
						inline: "nearest",
					});
				}
				window.history.pushState({}, "", props.href);
			}}
		/>
	);
}
export function ExternalLink(props: HTMLProps<HTMLAnchorElement>) {
	return (
		<a
			{...props}
			className={`block text-sm p-2 uppercase hover:underline underline-2 cursor-pointer ease-in-out ${props.className}`}
			target="_blank"
			rel="noopener noreferrer"
		/>
	);
}
