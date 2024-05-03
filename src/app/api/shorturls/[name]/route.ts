import { getShortURL, deleteShortURL } from "@/database/shortURLs";

type Params = {
    name: string
}

export async function GET(request : Request, context: { params: Params}) {

    const { name } = context.params;
    const destinationURL = await getShortURL(name);

    if (!destinationURL) return Response.json({ status: 404 });
    return Response.json(destinationURL);
}

export async function DELETE(request : Request, context: { params: Params}) : Promise<Response> {

    const { name } = context.params;

    if (!name) return Response.json({ status: 400 });

    try {
        await deleteShortURL(name);

        return Response.json({ status: 200 });
    } catch (err) {
        console.error('Error deleting short URL:', err);

        return Response.json({ status: 500 });
    }
}