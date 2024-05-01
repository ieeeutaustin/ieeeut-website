import { putShortURL, getShortURL, getAll, deleteShortURL } from "@/database/shortURLs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(request : Request) {

    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    if (!name) {
        const shortURLs = await getAll();

        if (!shortURLs) return Response.json({ status: 404 });

        return Response.json(shortURLs);
    } else {
        
        const destinationURL = await getShortURL(name);

        if (!destinationURL) return Response.json({ status: 404 });
    
        return Response.json(destinationURL);
    }
}

export async function PUT(request : Request) : Promise<Response> {

    const shortURL = await request.json();

    if (!shortURL) return Response.json({ status: 400 });

    shortURL.name = shortURL.name.toLowerCase();

    try {
        const res = await putShortURL(shortURL);

        return Response.json(res);
    } catch (err) {
        console.error('Error creating short URL:', err);

        return Response.json(err);
    }
}

export async function DELETE(request : Request) : Promise<Response> {

    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    if (!name) return Response.json({ status: 400 });

    try {
        await deleteShortURL(name);

        return Response.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting short URL:', err);

        return Response.json({ status: 500 });
    }
}