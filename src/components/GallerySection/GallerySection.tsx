import PageSection from "@/components/PageSection/PageSection";
import GridContainer from "@/components/GridContainer/GridContainer";
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
							{/* <img src={imgSrc} alt="" /> */}
							<Image src={imgSrc} alt="" width={500} height={400} />
						</li>
					);
			})}
		</div>
	);
}
