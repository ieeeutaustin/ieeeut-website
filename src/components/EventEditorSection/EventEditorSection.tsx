'use client'

import useSWR from 'swr';  
import { useEffect, useState, useRef } from 'react';
import IconButton from '@mui/joy/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { generateUploadButton } from "@uploadthing/react";
import Image from 'next/image';

import type { OurFileRouter } from "@/app/api/uploadthing/core";

import "../EventsSection/EventsSection.scss";
import "./EventEditorSection.scss";

import { Event } from '@/database/events';
import EventEditorCard from "../EventEditorCard/EventEditorCard";
import Button from '@mui/joy/Button';

const fetcher = async (url: string) => fetch(url).then(res => res.json());

export const UploadButton = generateUploadButton<OurFileRouter>();

export default function EventEditorSection() {
	const [eventModal, setEventModal] = useState(false);
	const { data, mutate } = useSWR("/api/events", fetcher);
	const [ events, setEvents ] = useState<Event[]>([]);

	useEffect(() => {
		if (data) {
			setEvents(data);
		}
	}, [data]);

	return (
		<div className={"events-section admin"} >
			{eventModal && <EventSectionModal eventModal={eventModal} setEventModal={setEventModal} mutate={mutate}/>}

			<div className="events-container">
				<IconButton
					size="sm"
					variant="solid"
					color="success"
					onClick={() => setEventModal(true)}
				>
					<AddIcon style={{padding: '10px'}}/>
				</IconButton>
				{events.slice().map((event: Event) => (
					<EventEditorCard key={event.id} event={event} mutate={mutate}/>
				))}
			</div>
		</div>
	);
}

function EventSectionModal({eventModal, setEventModal, mutate}: any) {

	const [eventImgPreview, setEventImgPreview] = useState<string>("");
	const modalRef = useRef<HTMLFormElement | null>(null);
	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			setEventModal(false);
    	}
  	};

	useEffect(() => {
		if (eventModal) {
		  	document.addEventListener('click', handleClickOutside);
		}
	
		return () => {
		  	document.removeEventListener('click', handleClickOutside);
		};
	}, [eventModal]);

	async function createEvent(e: any) {
		e.preventDefault();

		const formData = new FormData(modalRef.current!);
		const form = Object.fromEntries(formData.entries());

		form.image = eventImgPreview;
	
		// Required fields
		if (!form.title) {
			alert("Title is required");
			return;
		}

		if (!form.date) {
			alert("Date is required");
			return;
		}

		if (form.endTime && !form.startTime) {
			alert("Start time is required if end time is provided");
			return;
		}

		// Create time string
		let startTime = '7:00 pm';
		let endTime = '';
		let time = startTime;

		if (form.startTime) {
			let startHours = Number(form.startTime.toString().split(':')[0]);
			let startMinutes = form.startTime.toString().split(':')[1];
			let startPeriod = startHours >= 12 ? 'pm' : 'am';

			if (startHours > 12) startHours -= 12;
			if (startHours == 0) startHours = 12;

			startTime = `${startHours}:${startMinutes} ${startPeriod}`;
		}

		if (form.endTime) {
			let endHours = Number(form.endTime.toString().split(':')[0]);
			let endMinutes = form.endTime.toString().split(':')[1];
			let endPeriod = endHours >= 12 ? 'pm' : 'am'; 

			if (endHours > 12) endHours -= 12;
			if (endHours == 0) endHours = 12;
			
			endTime = `${endHours}:${endMinutes} ${endPeriod}`;
		}

		if (endTime) {
			// Check if start and end time periods are the same and format accordingly
			if (startTime.slice(-2, startTime.length) == endTime.slice(-2, endTime.length)) {
				
				startTime = startTime.slice(0, -3);
				time = `${startTime}-${endTime}`;

			} else time = `${startTime} - ${endTime}`;
		} else time = `${startTime}`; 
		
		time = time.replace(/(:00)/g, '');

		// Create event date
		const [year, month, day] = form.date.toString().split('-').map(Number);
		const [hour, minute] = form.startTime.toString().split(':').map(Number);

		// Convoluted way to get the central timezone offset, either CDT or CST (I'm sorry)
		const localDate = new Date(year, month - 1, day, hour, minute); // Date in the user's timezone
		const localCentralDate = new Date(localDate.toLocaleString("en-US", { timeZone: "America/Chicago" })); // Date still in user's timezone but with central timezone offset applied
		const localCentralDifference = (localCentralDate.getTime() - localDate.getTime()) / 3600000; // Difference between user's timezone and central timezone
		const centralOffset = (localDate.getTimezoneOffset() / 60) - localCentralDifference; // Central time zone

		// Format event date given gathered info
		const [sYear, sMonth, sDay] = form.date.toString().split('-').map(String);
		const [sHour, sMinute] = form.startTime.toString().split(':').map(String);
		
		const eventDate = new Date(`${sYear}-${sMonth}-${sDay}T${sHour}:${sMinute}:00.000-${(centralOffset).toString().padStart(2, '0')}:00`)

		// Create event object
		const event: Event = {
			title: form.title.toString(),
			description: form.description.toString(),
			image: form.image.toString(),
			room: form.room.toString(),
			rsvp: form.rsvp.toString(),
			date: eventDate.toISOString(),
			time: time,
			id: Date.now().toString(),
			org: 'ieeeut'
		};

		// Save the changes to the database
		await fetch("/api/events", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(event),
		});

		try {
			await mutate();

			setEventModal(false);
		} catch (err) {
			console.error('Error creating event:', err);
			alert('Error creating event');
		}	
	}

	return (
		<form ref={modalRef} action="" onSubmit={createEvent}>
			<h3>Create Event</h3>
			<CloseIcon style={{padding: '10px'}} fontSize='large' className='close' onClick={() => setEventModal(false)}/>
			<div className="form-entry">
				<label>
					Title*
				</label>
				<input type="text" placeholder="Title" name='title'/>
			</div>
			<div className="form-entry">
				<label>
					Description
				</label>
				<textarea placeholder="Description" name='description'/>
			</div>
			<div className="form-entry">
				<label>
					Date* (Unchangeable)
				</label>
				<input type="date" name='date'/>
			</div>
			<div className="form-entry-pair">
				<div className="form-entry">
					<label>
						Start Time
					</label>
					<input type="time" name='startTime'/>
				</div>
				<div className="form-entry">
					<label>
						End Time
					</label>
					<input type="time" name='endTime'/>
				</div>
			</div>
			<div className="form-entry">
				<label>
					Room
				</label>
				<input type="text" placeholder="ETC 2.136" name='room'/>
			</div>
			<div className="form-entry">
				<label>
					RSVP Link
				</label>
				<input type="url" placeholder="https://ieeeut.org/joinafam" name='rsvp'/>
			</div>
			<div className="form-entry">
				<label>
					Image
				</label>
				{eventImgPreview && <Image src={eventImgPreview} alt="" height={50} width={50}/>}
				<UploadButton
					endpoint="imageUploader"
					onClientUploadComplete={(res) => {
						if (res && res[0]) {
							setEventImgPreview(res[0].url);
						}
					}}
					onUploadError={(error: Error) => {
						alert(`ERROR! ${error.message}`);
						// cancelImageEdit();
					}}
				/>
			</div>
			<div className="form-entry">
				<Button color='success' type='submit'>Create Event</Button>
			</div>
		</form>
	);
}