import { NextResponse } from 'next/server';
import { deleteEvent } from "@/database/events";

type Params = {
    id: string
}

export async function DELETE(request : Request, context: { params: Params}) : Promise<NextResponse> {
    const { id } = context.params;

    if (!id) return NextResponse.json({ status: 400 });

    try {
        await deleteEvent(id);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting event:', err);

        return NextResponse.json(err);
    }
}