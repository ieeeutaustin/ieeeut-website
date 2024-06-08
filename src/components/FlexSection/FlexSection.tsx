import Image from "next/image";

import "./FlexSection.scss";

import Button, { ButtonType } from "../Button/Button";

type SectionType = {
	title: string;
	icon?: string;
	desc?: string | any;
	button?: ButtonType;
	bgImage?: string;
	bgImageAlt?: string;
};

export default function FlexSection({ sections } : { sections: SectionType[]}) {

	return (
		<div className="flex-section">
			{sections.map(section => (
				<div key={section.title} className="flex-col">
					{section.icon &&
						<Image
							className="flex-col-icon"
							src={section.icon}
							alt={section.icon}
							height={70}
							width={70}
						/>
					}

					<h2>{section.title}</h2>
					{section.desc && <p>{section.desc}</p>}

					{section.button &&
						<Button {...section.button} />
					}

					{section.bgImage && 
						<Image
							className="flex-col-bg-image"
							src={section.bgImage}
							alt={section?.bgImageAlt || ""}
							fill={true}
							quality={50}
						/>
					}

					<div className="background-color" />
				</div>
			))}
		</div>
	);
}

