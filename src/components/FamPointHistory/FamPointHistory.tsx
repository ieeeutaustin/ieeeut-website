"server"

import "./FamPointHistory.scss";
import { famConfig } from "@/utils/fam-config";

import { google } from "googleapis";
import TextSection from "../TextSection/TextSection";

type FamTeam = {
    team: string,
    points: number,
    theme: any
}

const decodedKey = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? '', 'base64').toString('utf-8');
const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(decodedKey),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
});

const sheets = google.sheets({version: "v4", auth: auth});

type FamSpreadsheetPointEntry = {
    type: string,
    date: Date,
    desc: string,
    points: number
    theme: any
}

async function getPointHistory(): Promise<FamSpreadsheetPointEntry[]> {

    const pointHistory: FamSpreadsheetPointEntry[] = [];

    for (var fam of famConfig.fams) {

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: famConfig.spreadsheetId,
            range: fam.entriesRange
        });

        response.data.values?.forEach((entry) => entry[0] && pointHistory.push({
            type: entry[0],
            date: new Date(entry[1]),
            desc: entry[4],
            points: entry[5],
            theme: fam
        }));
    }

    return pointHistory.sort((a, b) => b.date.getTime() - a.date.getTime());;
}

export default async function FamPointHistory() {

    const pointHistory: FamSpreadsheetPointEntry[] = await getPointHistory();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <TextSection textSide="center" textCols="4">
            <h2>Point History</h2>
            <div className="point-history">
                {pointHistory.map((entry, index) => (
                    <div key={index}>
                        {(index == 0 || entry.date.getDate() != pointHistory[index-1].date.getDate()) && <h4 className="entry-date">{entry.date.toLocaleDateString('en-US', options)}</h4>}
                        <div className="point-entry">
                            <div className="entry-circle" style={{backgroundColor: entry.theme.primaryColor}}/>
                            <div className="entry-info">
                                <p className="entry-type">{entry.type}</p>
                                {entry.desc.length > 0 && <p className="entry-desc">{entry.desc}</p>}
                            </div>
                            <p className="entry-points">{entry.points}<span> pts</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </TextSection>
    )
}