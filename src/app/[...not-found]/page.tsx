"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import HeaderSection from "@/components/HeaderSection/HeaderSection";
import { getURL } from "@/utils/socials";

async function getShortURL(name: string) {

	const response = await fetch(`/api/shorturls/${name}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	return data.url;
}

export default function NotFound() {
	const [redirecting, setRedirecting] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		(async function checkShortURL() {
			const parsedPathname = pathname.split("/")[1].toLowerCase();
			const destinationURL = await getShortURL(parsedPathname) || getURL(parsedPathname);
	
			if (destinationURL) {
				router.replace(destinationURL);
			} else setRedirecting(false);
		})();
	}, [pathname, router]);

	return (
		<div>
			{redirecting ? (
				<HeaderSection title="Redirecting..." />
			) : (
				<HeaderSection
					title="404"
					desc={`Looks like "${pathname}" doesn't exist...`}
					image="/assets/images/backgrounds/BlueGradient.jpg"
					buttonName="Home"
					buttonLink="/"
					buttonNewWindow={false}
				/>
			)}
		</div>
	);
}
