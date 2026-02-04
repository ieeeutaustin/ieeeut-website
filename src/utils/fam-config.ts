export const famConfig: famConfigType = {
    fams: [
        {
            name: "The Overworld",
            nickname: "The Overworld",
            backgroundImage: '/assets/images/familieee/theme/the_overworld.jpg',
            mascotImage: '/assets/images/familieee/theme/bee.png',
            primaryColor: '#60ff36',
            textColor: '#EEEEEE',
            entriesRange: 'Points!B7:G103', // Likely don't need to change this
            pointsRange: 'Points!G7:G103' // Likely don't need to change this
        },
        {
            name: "The Nether",
            nickname: "The Nether",
            backgroundImage: '/assets/images/familieee/theme/the_nether.png',
            mascotImage: '/assets/images/familieee/theme/ghast.png',
            primaryColor: '#ff592e',
            textColor: '#EEEEEE',
            entriesRange: 'Points!I7:N103', // Likely don't need to change this
            pointsRange: 'Points!N7:N103' // Likely don't need to change this
        },
        {
            name: "The End",
            nickname: "The End",
            backgroundImage: '/assets/images/familieee/theme/the_end.png',
            mascotImage: '/assets/images/familieee/theme/Enderman.png',
            primaryColor: '##a354ff',
            textColor: '#EEEEEE',
            entriesRange: 'Points!P7:U103', // Likely don't need to change this
            pointsRange: 'Points!U7:U103' // Likely don't need to change this
        },
    ],
    /*
        Make sure to share this spreadsheet with the associated Google Cloud service account. As of now that email is:
            'ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com'
    */
    spreadsheetId: "1se1F21f6T2MMfjnbIYExQOhGbW-Cegr-Es1jXjQyVLY"
}

type famConfigType = {
    fams: famThemeType[],
    spreadsheetId: string
}

type famThemeType = {
    name: string,
    nickname: string,
    backgroundImage: string,
    mascotImage: string,
    primaryColor: string,
    textColor: string,
    entriesRange: string,
    pointsRange: string
}
