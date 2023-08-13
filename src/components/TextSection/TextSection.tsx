"use client";
import "./TextSection.scss";
import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import { useEffect, useRef, useState } from "react";

export default function TextSection({
	children,
	textSide,
	textCols,
	textColor,
	graphicSrc,
	graphicAlt
}: {
	children: any;
	textSide: string;
	textCols?: string;
	textColor?: string;
	graphicSrc?: string;
	graphicAlt?: string;
}) {
	if (textSide == "center")
		return (
			<div className={"text-section center"}>
				<div className={"text-section-content " + (textColor || "")}>
					{children}
				</div>
				{graphicSrc && (
					<div className="text-section-graphic">
						{graphicSrc.includes(".mp4") ? (
							<video autoPlay={true} muted={true} loop={true}>
								<source src={graphicSrc} type="video/mp4" />
							</video>
						) : (
							<Image
								src={graphicSrc}
								alt={graphicAlt || ""}
								width={400}
								height={300}
							/>
						)}
					</div>
				)}
			</div>
		);

	let videoID = "";

	if (graphicSrc?.includes("youtube")) {
		videoID = graphicSrc.match(/youtube\.com\/watch\?v=(.+)\?*/)?.[1] || "";
	}

	return (
		<div
			className={
				"text-section " +
				textSide +
				(textCols ? ` cols-${textCols}` : " cols-5")
			}
		>
			<GridContainer>
				<div className={"text-section-content " + (textColor || "")}>
					{children}
				</div>
				{graphicSrc && (
					<div className="text-section-graphic">
						{videoID != "" ? (
							<iframe
								src={`https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoID}`}
							/>
						) : graphicSrc.includes(".mp4") ? (
							<video autoPlay={true} muted={true} loop={true}>
								<source src={graphicSrc} type="video/mp4" />
							</video>
						) : (
							<Image
								src={graphicSrc}
								alt={graphicAlt || ""}
								fill={true}
								sizes="40vw"
							/>
						)}
					</div>
				)}
			</GridContainer>
		</div>
	);
}
