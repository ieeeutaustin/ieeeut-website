"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function NotFound() {
	const [redirecting, setRedirecting] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const shortURLs = {
			discord: "https://discord.gg/Vcdqz8YczQ",
			slack: "https://join.slack.com/t/ieeeutaustin/signup",
			instagram: "https://instagram.com/ieee.ut",
			insta: "https://instagram.com/ieee.ut",
			tiktok: "https://tiktok.com/@ieee.ut",
			gcal: "https://calendar.google.com/calendar/u/0?cid=Y183NWNmZGJlZGFjNTY2MGZjOTA2MTRlZTRiNTliNzExOTE0MjU1MGIwYmM5MWJlNTgyNmFiNDBlNzQ4MmQ2YjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
			"punch-card": "/membership#punch-card"
		};

		const parsedPathname = pathname.split("/")[1].toLowerCase();

		if (shortURLs[parsedPathname as keyof typeof shortURLs] != undefined) {
			router.replace(shortURLs[parsedPathname as keyof typeof shortURLs]);
		} else setRedirecting(false);
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
