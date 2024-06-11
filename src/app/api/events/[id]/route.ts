import { NextResponse } from 'next/server';
import { deleteEvent } from "@/database/events";

type Params = {
    id: string
}

export async function DELETE(request : Request, context: { params: Params}) : Promise<NextResponse> {
    const { id } = context.params;
    
    if (!id) return NextResponse.json({ status: 400 });
    if (!request.url) return NextResponse.json({ status: 400 });

    const url = new URL(request.url);
    const date = url.searchParams.get('date') || new Date().toISOString();

    try {
        await deleteEvent(id, date);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting event:', err);

        return NextResponse.json(err);
    }
}