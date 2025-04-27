"use client";

import type { HTMLProps } from "react";

export function SectionHeading(props: HTMLProps<HTMLHeadingElement>) {
	return (
		<h3
			{...props}
			className={`text-2xl font-sans uppercase border-0 border-b-2 pb-2 ${props.className} underlin-offset-2`}
		/>
	);
}
export function SectionSubheading(props: HTMLProps<HTMLHeadingElement>) {
	return (
		<h4
			className="text-md font-light uppercase text-slate-800 dark:text-slate-300"
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

import { useEffect } from "react";
export function useInitialJumpLink(initialJumpLink: string | null) {
	// biome-ignore lint/correctness/useExhaustiveDependencies(initialJumpLink): We only want to perform the scroll on initial page load
	useEffect(() => {
		if (initialJumpLink) {
			const target = document.querySelector(initialJumpLink);
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "nearest",
				});
			}
			window.history.pushState({}, "", initialJumpLink);
		}
	}, []);
	return initialJumpLink;
}
