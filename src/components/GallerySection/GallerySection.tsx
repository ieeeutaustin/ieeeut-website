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
				if (index < hideAfter) {
					if (imgSrc == "break") {
						hideAfter++;
						return <li className="break" key={imgSrc}></li>;
					} else
						return (
							<li key={imgSrc}>
								<Image
									src={imgSrc}
									alt={alts?.[index] || ""}
									fill={true}
									sizes="(min-width: 800px) 33vw, (min-width: 400px) 50vw, 100vw"
								/>
							</li>
						);
				}
			})}
		</div>
	);
}
