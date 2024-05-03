import { NextResponse } from 'next/server';
import { getAll, putEvent, deleteEvent, Event } from "@/database/events";

export async function GET(request : Request) : Promise<NextResponse>{
    try {
        const events = await getAll();

        if (!events) return NextResponse.json({ status: 404 });
    
        return NextResponse.json(events);
    } catch (err) {
        console.error('Error getting events:', err);

        return NextResponse.json({status: err});
    }
}

export async function PUT(request : Request) : Promise<NextResponse> {
    const event = await request.json() as Event;

    if (!event) return NextResponse.json({ status: 400 });

    try {
        const res = await putEvent(event);

        return NextResponse.json(res);
    } catch (err) {
        console.error('Error creating event:', err);

        return NextResponse.json(err);
    }
}

export async function DELETE(request : Request) : Promise<NextResponse> {
    const { id } = await request.json();

    if (!id) return NextResponse.json({ status: 400 });

    try {
        await deleteEvent(id);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting event:', err);

        return NextResponse.json(err);
    }
}