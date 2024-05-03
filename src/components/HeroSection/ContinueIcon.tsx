'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ContinueIcon(props: any) {
	const [showExpandArrow, setShowExpandArrow] = useState(true);

    useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			
			setShowExpandArrow(scrollTop === 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

    return <Image src={"/assets/icons/dropdown.svg"} alt={""} width={30} height={30} className={`hero-expand-arrow ${!showExpandArrow ? 'hidden' : ''}`}/>
}