import { NextResponse } from 'next/server';
import { getShortURL, deleteShortURL } from "@/database/shortURLs";

type Params = {
    name: string
}

export async function GET(request : Request, context: { params: Params}) {

    const { name } = context.params;
    const destinationURL = await getShortURL(name);

    if (!destinationURL) return NextResponse.json({ status: 404 });
    return NextResponse.json(destinationURL);
}

export async function DELETE(request : Request, context: { params: Params}) : Promise<NextResponse> {

    const { name } = context.params;

    if (!name) return NextResponse.json({ status: 400 });

    try {
        await deleteShortURL(name);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting short URL:', err);

        return NextResponse.json({ status: 500 });
    }
}