import { NextResponse } from 'next/server';
import { putShortURL, getShortURL, getAll, deleteShortURL } from "@/database/shortURLs";

export async function GET(request : Request) {

    const shortURLs = await getAll();

    if (!shortURLs) return NextResponse.json({ status: 404 });

    return NextResponse.json(shortURLs);
}

export async function PUT(request : Request) : Promise<NextResponse> {

    const shortURL = await request.json();

    if (!shortURL) return NextResponse.json({ status: 400 });

    shortURL.name = shortURL.name.toLowerCase();

    try {
        const res = await putShortURL(shortURL);

        return NextResponse.json(res);
    } catch (err) {
        console.error('Error creating short URL:', err);

        return NextResponse.json(err);
    }
}