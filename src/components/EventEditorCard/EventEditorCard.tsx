'use client'

import "../EventsCard/EventsCard.scss";
import "./EventEditorCard.scss";

import { useEffect, useState } from "react";
import { generateUploadButton } from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

import Image from "next/image";
import Button from "../Button/Button";
import ButtonJoy from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { Event } from "@/database/events";

export const UploadButton = generateUploadButton<OurFileRouter>();

export default function EventEditorCard(props: any) {

	const event = props.event as Event;

	const [textEditable, setTextEditable] = useState(false);
	const [rsvpEditable, setRSVPEditable] = useState(false);
	const [imageEditable, setImageEditable] = useState(false);

	const [title, setTitle] = useState(event?.title || "");
	const [desc, setDesc] = useState(event?.description || "");
	const [time, setTime] = useState(event?.time || "");
	const [room, setRoom] = useState(event?.room || "");
	const [rsvp, setRSVP] = useState(event?.rsvp || "");
	const [image, setImage] = useState(event?.image || "");

	const [dateLong, setDateLong] = useState("");
	const [dateShort, setDateShort] = useState("");

	useEffect(() => {
		const eventDate = new Date(event.date);

		setDateLong(eventDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}))

		setDateShort(eventDate.toLocaleDateString('en-US', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
		}))

	}, [event.date]);

	const handleTextEdit = () => {
		setTextEditable(!textEditable);

		if (!textEditable) handleCancel();
	}

	const handleRSVPEdit = () => {
		setRSVPEditable(!rsvpEditable);

		if (!rsvpEditable) handleCancel();
	}

	const handleImageEdit = () => {
		setImageEditable(!imageEditable);

		if (!imageEditable) handleCancel();
	}

	const handleImageURLChange = (e: any) => {

		if (!e.target.value.startsWith("http") && !e.target.value.startsWith("/")) setImage("/" + e.target.value);
		else setImage(e.target.value);
	}

	const cancelTextEdit = () => {
		setTitle(event?.title || "No title");
		setDesc(event?.description || "");
		setTime(event?.time || "");
		setRoom(event?.room || "");

		setTextEditable(false);
	}

	const cancelRSVPEdit = () => {
		setRSVP(event.rsvp || "");

		setRSVPEditable(false);
	}

	const cancelImageEdit = () => {
		setImage(event?.image || "")

		setImageEditable(false);
	}

	const handleCancel = () => {
		if (textEditable) cancelTextEdit();
		if (rsvpEditable) cancelRSVPEdit();
		if (imageEditable) cancelImageEdit();
	}

	const handleSave = async () => {

		if (textEditable) {
			
			// Save the text changes'
			setTextEditable(false);

			event.title = title;
			event.description = desc;
			event.time = time;
			event.room = room;

			// Save the changes to the database
			await fetch("/api/events", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(event),
			});

			await props.mutate();

		} else if (rsvpEditable) {

			// Save the rsvp changes
			setRSVPEditable(false);

			event.rsvp = rsvp;

			// Save the changes to the database
			await fetch("/api/events", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(event),
			});

			await props.mutate();

		} else if (imageEditable) {

			// Save the image changes
			setImageEditable(false);

			event.image = image;

			// Save the changes to the database
			await fetch("/api/events", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(event),
			});

			await props.mutate();
		}
	}

	const handleDelete = async () => {

		if (!window.confirm("Are you sure you want to delete this event?")) return;

		await fetch(`/api/events/${event.id}?date=${event.date}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		await props.mutate();
	}

	return (
		<div className="event-card admin">
			<div className="relative">
				<Image
					className="event-image"
					src={image || "/assets/images/flyers/default.jpg"}
					alt=""
					width={200}
					height={200}
				/>
				<div className="event-content">
					{
						textEditable ? (<>
							<textarea className="h3" defaultValue={event.title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
							<textarea className="p" defaultValue={desc} rows={4} placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
						</>) : (<>
							<h3>{event.title || "No title"}</h3>
							<p>{event.description}</p>
						</>)
					}

					<div className="event-details">
						<div className="event-time-loc">
							{textEditable ?
								<input disabled className="p" defaultValue={dateShort} placeholder="Date (MM/DD/YY)" />
								:
								<p>{dateLong}</p>
							}
							<div className="flex gap-1 flex-wrap">
								{textEditable ?
									<input className="p" defaultValue={event.time} placeholder='Time (Ex: "7-8 pm")' onChange={(e) => setTime(e.target.value)} />
									:
									<p>{event.time}</p>
								}
								{(textEditable || event.room) && <p>@</p>}
								{textEditable ?
									<input className="p" defaultValue={event.room} placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
									:
									<p>{event.room}</p>
								}
							</div>
						</div>
						{!textEditable && event.rsvp && <Button link={event.rsvp} name="RSVP" type="dark" icon="/assets/icons/calendar-white.svg" newWindow={true} />}
					</div>
				</div>
			</div>
			<div className="event-admin">
				<div className="event-buttons">
					<ButtonJoy
						size="sm"
						variant="solid"
						color="primary"
						onClick={handleTextEdit}
						disabled={textEditable}
					>
						Edit Text
					</ButtonJoy>
					<ButtonJoy
						size="sm"
						variant="solid"
						color="primary"
						onClick={handleRSVPEdit}
						disabled={rsvpEditable}
					>
						Edit RSVP URL
					</ButtonJoy>
					<ButtonJoy
						size="sm"
						variant="solid"
						color="success"
						startDecorator={<FileUploadIcon />}
						disabled={imageEditable}
						onClick={handleImageEdit}
					>
						New Image
					</ButtonJoy>
					<IconButton
						size="sm"
						variant="solid"
						color="danger"
						onClick={handleDelete}
					>
						<DeleteIcon />
					</IconButton>
				</div>
				{(textEditable || rsvpEditable || imageEditable) && <div className="event-buttons-details">
					{rsvpEditable && <input className="rsvp-url-button" type="text" defaultValue={event.rsvp} placeholder="https://ieeeut.org" onChange={(e) => setRSVP(e.target.value)} />}
					{imageEditable && 
						<>
							<UploadButton
								endpoint="imageUploader"
								onClientUploadComplete={(res) => {
									setImage(res[0].url);
								}}
								onUploadError={(error: Error) => {
									alert(`ERROR! ${error.message}`);
									cancelImageEdit();
								}}
							/>
							OR
							<textarea className="rsvp-url-button" defaultValue={image} placeholder="/assets/images/flyers/default.jpg" onChange={handleImageURLChange} />
						</>
					}
					{(textEditable || rsvpEditable || imageEditable) && (
						<>
							<ButtonJoy
								size="sm"
								variant="solid"
								color="success"
								onClick={handleSave}
							>
								Save
							</ButtonJoy>
							<ButtonJoy
								size="sm"
								variant="solid"
								color="danger"
								onClick={handleCancel}
							>
								Cancel
							</ButtonJoy>
						</>
					)}
				</div>}
			</div>
		</div>
	);
}
