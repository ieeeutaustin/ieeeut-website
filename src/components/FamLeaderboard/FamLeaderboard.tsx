"server"

import "./FamLeaderboard.scss";
import { famConfig } from "@/utils/fam-config";

import Image from "next/image";
import { google } from "googleapis";

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

async function getSortedFams(): Promise<FamTeam[]> {

    const fams: FamTeam[] = []

    for (var fam of famConfig.fams) {

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: famConfig.spreadsheetId,
            range: fam.pointsRange
        });

        let points = 0;

        response.data.values?.forEach((point) => points += Number(point[0]));

        fams.push({
            team: fam.name,
            points: points,
            theme: fam
        })
    }

    return fams.sort((a, b) => b.points - a.points);
}

export default async function FamLeaderboard() {

    const fams: FamTeam[] = await getSortedFams();
    const pointRange = fams[0].points - fams[fams.length - 1].points;
    const pointMin = fams[fams.length - 1].points;

    return (
        <div className="fam-leaderboard">
            <div className="teams">
                {fams.map((fam) => (
                    <div key={fam.team} className="team">
                        <Image 
                            src={fam.theme.mascotImage}
                            alt=""
                            sizes="100vw"
                            width={100}
                            height={100}
                        />
                        <div
                            className="pillar"
                            style={{
                                backgroundColor: fam.theme.primaryColor,
                                color: fam.theme.textColor,
                                height: ((fam.points - pointMin) / (Math.max(pointRange, 1)) * 150) + 100
                            }}
                        >
                            <span>{fam.points}</span>
                            <span>Points</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="background-color" />
            <Image
                src={fams[0].theme.backgroundImage}
                alt=""
                className="background"
                fill={true}
            />
        </div>
    )
}