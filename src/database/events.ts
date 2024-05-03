import { db } from './config';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// ShortURL type
export interface Event {
    id: string;
    date: string;
    description?: string;
    image?: string;
    room?: string;
    rsvp?: string;
    time?: string;
    title?: string;
}

// Get all events
export const getAll = async (): Promise<Event[]> => {

    console.log('Getting all events');

    const params = {
        TableName: 'Events',
    };

    try {
        const data = await db.scan(params).promise();
        const items = data.Items as Event[];

        return Promise.resolve(items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));

    } catch (err) {
        console.error('Error getting events:', err);

        return Promise.reject(500);
    }
};

// Create or Update Event
export const putEvent = async (event: Event): Promise<number> => {

    const session = await getServerSession(authOptions);

    if (!session) return Promise.reject(401);

    // Default values
    if (!event.id) event.id = Date.now().toString();
    if (!event.image) event.image = '';
    if (!event.room) event.room = '';
    if (!event.time) event.time = '';
    if (!event.rsvp) event.rsvp = '';
    if (!event.title) event.title = '';
    if (!event.description) event.description = '';
    
    const params = {
        TableName: 'Events',
        Item: event,
    };
    
    try {
        await db.put(params).promise();

        return Promise.resolve(201);
    } catch (err) {
        console.error('Error putting short URL:', err);

        return Promise.reject(500);
    }
};

// Delete Event
export const deleteEvent = async (id: string): Promise<number> => {

    const session = await getServerSession(authOptions);

    if (!session) return Promise.reject(401);

    const params = {
        TableName: 'Events',
        Key: {
            id: id,
        },
    };

    try {
        await db.delete(params).promise();

        return Promise.resolve(204);
    } catch (err) {
        console.error('Error deleting short URL:', err);

        return Promise.reject(500);
    }
};