'use client'

import useSWR from 'swr';  
import { useEffect, useState } from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';

import "../EventsSection/EventsSection.scss";

import { Event } from '@/database/events';
import EventEditorCard from "../EventEditorCard/EventEditorCard";

const fetcher = async (url: string) => fetch(url).then(res => res.json());

export default function EventEditorSection(props: any) {
	const { data, mutate } = useSWR("/api/events", fetcher);
	const [ events, setEvents ] = useState<Event[]>([]);

	useEffect(() => {
		if (data) {
			setEvents(data);
		}
	}, [data]);

	const addEvent = () => {
		const newEvent: Event = {
			id: Date.now().toString(),
			date: new Date().toISOString(),
			description: "",
			image: "",
			room: "",
			rsvp: "",
			time: "",
			title: ""
		};

		setEvents([newEvent, ...events]);
	}

	return (
		<div className={"events-section admin"}>
			<div className="events-container">
				<IconButton
					size="sm"
					variant="solid"
					color="success"
					onClick={addEvent}

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
