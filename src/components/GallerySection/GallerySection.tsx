import "./GallerySection.scss";
import Image from "next/image";

export default function GallerySection({
	images,
	alts,
	...props
}: {
	images: string[];
	alts?: string[];
	props?: any;
}) {
	return (
		<div className="gallery-section">
			{images.map((imgSrc: string, index: number) => {
				if (imgSrc == "break")
					return <li className="break" key={imgSrc}></li>;
				else
					return (
						<li key={imgSrc}>
							<Image
								src={imgSrc}
								alt={alts?.[index] || ""}
								fill={true}
								sizes="(max-width: 800px) 50vw, 40vw"
							/>
						</li>
					);
			})}
		</div>
	);
}
