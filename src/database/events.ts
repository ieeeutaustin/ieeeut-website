import { db } from './config';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export type Event = {
    org: string;
    id: string;
    date: string;
    description?: string;
    image?: string;
    room?: string;
    rsvp?: string;
    time?: string;
    title?: string;
}

// Create or Update Event
export const putEvent = async (event: Event): Promise<number> => {

    const session = await getServerSession(authOptions);

    if (!session) return Promise.reject(401);

    // Default values
    if (!event.org) event.org = 'ieeeut';
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
        console.error('Error putting event:', err);

        return Promise.reject(500);
    }
};

// Delete Event
export const deleteEvent = async (id: string, date: string): Promise<number> => {

    const session = await getServerSession(authOptions);

    if (!session) return Promise.reject(401);

    const params = {
        TableName: 'Events',
        Key: {
            id: id,
            date: date
        },
    };

    try {
        await db.delete(params).promise();

        return Promise.resolve(200);
    } catch (err) {
        console.error('Error deleting event:', err);

        return Promise.reject(500);
    }

};

export const getRecentEvents = async (limit: number = -1): Promise<Event[]> => {

    const params = {
        TableName: 'Events',
        IndexName: 'org-date-index',
        KeyConditionExpression: 'org = :org',
        ExpressionAttributeValues: {
            ':org': 'ieeeut',
        },
        ScanIndexForward: false,
        Limit: limit < 1 ? undefined : limit,
    };

    try {
        const data = await db.query(params).promise();
        const items = data.Items as Event[];

        return Promise.resolve(items);

    } catch (err) {
        console.error('Error querying recent events:', err);

        return Promise.reject(500);
    }
}

export const getUpcomingEvent = async (): Promise<Event | null> => {

    const params = {
        TableName: 'Events',
        IndexName: 'org-date-index',
        KeyConditionExpression: 'org = :org and #date > :date',
        ExpressionAttributeNames: {
            '#date': 'date',
        },
        ExpressionAttributeValues: {
            ':org': 'ieeeut',
            ':date': new Date().toISOString(),
        },
        ScanIndexForward: true,
        Limit: 1,
    }

    try {
        const data = await db.query(params).promise();
        const items = data.Items as Event[] ?? [];

        return Promise.resolve(items.length ? items[0] : null);
    } catch (err) {
        console.error('Error getting upcoming event:', err);

        return Promise.reject(500);
    }
}

export const getEventCount = async (): Promise<number> => {

    const params = {
        TableName: 'Events',
        IndexName: 'org-date-index',
        KeyConditionExpression: 'org = :org',
        ExpressionAttributeValues: {
            ':org': 'ieeeut',
        },
        Select: 'COUNT',
    };

    try {
        const data = await db.query(params).promise();

        return Promise.resolve(data.Count ?? 0);
    } catch (err) {
        console.error('Error getting event count:', err);

        return Promise.reject(500);
    }
}