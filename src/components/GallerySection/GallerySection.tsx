import "./GallerySection.scss";
import Image from "next/image";

export default function GallerySection({ images }: any) {
	return (
		<div className="gallery-section">
			{images.map((imgSrc: string) => {
				if (imgSrc == "break")
					return <li className="break" key={imgSrc}></li>;
				else
					return (
						<li key={imgSrc}>
							<Image
								src={imgSrc}
								alt=""
								fill={true}
								sizes="25vw"
							/>
						</li>
					);
			})}
		</div>
	);
}
