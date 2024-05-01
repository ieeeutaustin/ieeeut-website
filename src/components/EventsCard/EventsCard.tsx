import "./EventsCard.scss";

import Image from "next/image";
import Button from "../Button/Button";
import ButtonJoy from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function EventCard(props: any) {

	const admin: boolean = props.admin === true;
	const event = props.event;
	let formattedDate = "";

	if (event) {
		const eventDate = new Date(event.date.replace(/\//g, "/"));
	
		formattedDate = eventDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}

	return (
		<div className={"event-card " + (admin ? "admin" : "")}>
			<div>
				<Image
					className="event-image"
					src={event.image || "/assets/images/flyers/default.jpg"	}
					alt=""
					width={200}
					height={200}
				/>
				<div className="event-content">
					<h3 contentEditable={admin ? 'true' : 'false'}>{event.title || "No title"}</h3>
					<p contentEditable={admin ? 'true' : 'false'}>{event.desc}</p>
					<div className="event-details">
						<div className="event-time-loc">
							<p contentEditable={admin ? 'true' : 'false'}>{formattedDate}</p>
							<div className="flex gap-1 flex-wrap">
								<p contentEditable={admin ? 'true' : 'false'}>{event.time || (admin && "No Time")}</p>
								<p>{(admin || event.room) && `@`}</p>
								<p contentEditable={admin ? 'true' : 'false'}>{(admin || event.room) && `${event.room || 'No Room'}`}</p>
							</div>
						</div>
						{event.rsvp && <Button link={event.rsvp} name="RSVP" type="dark" icon="/assets/icons/calendar-white.svg" newWindow={true}/>}
					</div>
				</div>
			</div>
			{ admin && <div className="event-admin">
				<ButtonJoy 
					size="sm" 
					variant="soft"
					color="primary"
				>
					Edit Text
				</ButtonJoy>
				<ButtonJoy 
					size="sm" 
					variant="soft"
					color="primary"
				>
					Edit RSVP URL
				</ButtonJoy>
				<ButtonJoy 
					size="sm" 
					variant="soft"
					color="success"
					startDecorator={<FileUploadIcon />}
				>
					New Image
				</ButtonJoy>
				<IconButton 
					size="sm" 
					variant="soft"
					color="danger"
				>
					<DeleteIcon />
				</IconButton>
			</div>}
		</div>
	);
}
