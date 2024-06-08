import "./GallerySection.scss";
import Image from "next/image";

export default function GallerySection({
	images,
	alts,
	hideAfter = images.length,
	...props
}: {
	images: string[];
	alts?: string[];
	hideAfter?: number;
	props?: any;
}) {
	return (
		<div className="gallery-section">
			{images.map((imgSrc: string, index: number) => {
				if (imgSrc == "break") {
					hideAfter++;
					return <div className="break" key={imgSrc}></div>;
				} else
					return (
						<div
							key={imgSrc}
							className={index >= hideAfter ? "hide" : ""}
						>
							<Image
								src={imgSrc}
								alt={alts?.[index] || ""}
								fill={true}
								sizes="(min-width: 800px) 33vw, (min-width: 400px) 50vw, 100vw"
							/>
						</div>
					);
			})}
		</div>
	);
}
