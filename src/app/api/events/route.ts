import { getAll, putEvent, deleteEvent, Event } from "@/database/events";

export async function GET(request : Request) {
    try {
        const events = await getAll();

        if (!events) return Response.json({ status: 404 });
    
        return Response.json(events);
    } catch (err) {
        console.error('Error getting events:', err);

        return Response.json({status: err});
    }
}

export async function PUT(request : Request) : Promise<Response> {
    const event = await request.json() as Event;

    if (!event) return Response.json({ status: 400 });

    try {
        const res = await putEvent(event);

        return Response.json(res);
    } catch (err) {
        console.error('Error creating event:', err);

        return Response.json(err);
    }
}

export async function DELETE(request : Request) : Promise<Response> {
    const { id } = await request.json();

    if (!id) return Response.json({ status: 400 });

    try {
        await deleteEvent(id);

        return Response.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting event:', err);

        return Response.json(err);
    }
}