import { putShortURL, getShortURL, getAll, deleteShortURL } from "@/database/shortURLs";

export async function GET(request : Request) {

    const shortURLs = await getAll();

    if (!shortURLs) return Response.json({ status: 404 });

    return Response.json(shortURLs);
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