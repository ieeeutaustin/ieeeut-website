import { db } from './config';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// ShortURL type
export interface ShortURL {
    name: string;
    url: string;
    visits?: number;
    dateCreated?: string;
}

// Get ShortURL by name
export const getShortURL = async (name: string): Promise<ShortURL | null> => {

    const params = {
        TableName: 'ShortURLs',
        Key: {
            name: name.toLowerCase(),
        }
    };

    const updateParams = {
        TableName: 'ShortURLs',
        Key: {
            name: name.toLowerCase(),
        },
        UpdateExpression: 'set visits = visits + :inc',
        ExpressionAttributeValues: {
            ':inc': 1
        }
    };

    try {

        const data = await db.get(params).promise();

        db.update(updateParams).promise();

        return data.Item as ShortURL;

    } catch (err) {
        console.error('Error getting short URL:', err);

        return null;
    }
};

// Get ShortURL by name
export const getAll = async (): Promise<ShortURL[] | null> => {

    const params = {
        TableName: 'ShortURLs',
    };

    try {
        const data = await db.scan(params).promise();

        return data.Items as ShortURL[];

    } catch (err) {
        console.error('Error getting short URL:', err);

        return null;
    }
};

// Create or Update ShortURL
export const putShortURL = async (shortURL: ShortURL): Promise<number> => {

    const session = await getServerSession(authOptions);

    if (!session) return Promise.reject(401);

    // Default values
    if (!shortURL.dateCreated) shortURL.dateCreated = new Date().toISOString();
    if (!shortURL.visits) shortURL.visits = 0;
    
    const params = {
        TableName: 'ShortURLs',
        Item: shortURL,
    };
    
    try {
        await db.put(params).promise();

        return Promise.resolve(201);
    } catch (err) {
        console.error('Error putting short URL:', err);

        return Promise.reject(500);
    }
};

// Delete ShortURL
export const deleteShortURL = async (name: string): Promise<number> => {

    const session = await getServerSession(authOptions);

    if (!session) return Promise.reject(401);

    const params = {
        TableName: 'ShortURLs',
        Key: {
            name: name,
        },
    };

    try {
        await db.delete(params).promise();

        return Promise.resolve(204);
    } catch (err) {
        console.error('Error deleting short URL:', err);

        return Promise.reject(500);
    }
};