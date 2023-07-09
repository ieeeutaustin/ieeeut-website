import PageSection from "@/components/PageSection/PageSection";
import GridContainer from "@/components/GridContainer/GridContainer";
import "./GallerySection.scss";

export default function GallerySection({ images }: any) {
	return (
		<div className="gallery-section">
			{images.map((imgSrc: string) => {
				if (imgSrc == "break")
					return <li className="break" key={imgSrc}></li>;
				else
					return (
						<li key={imgSrc}>
							<img src={imgSrc} alt="" />
						</li>
					);
			})}
		</div>
	);
}
