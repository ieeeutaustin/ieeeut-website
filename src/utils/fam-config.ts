export const famConfig: famConfigType = {
    fams: [
        {
            name: "Gru's Cru",
            nickname: "Gru's Cru",
            backgroundImage: '/assets/images/familieee/theme/the_overworld.png',
            mascotImage: '/assets/images/familieee/theme/bee.png',
            primaryColor: '#60ff36',
            textColor: '#EEEEEE',
            entriesRange: 'Points!B7:G103', // Likely don't need to change this
            pointsRange: 'Points!G7:G103' // Likely don't need to change this
        },
        {
            name: "Vector's Villains",
            nickname: "Vector's Villains",
            backgroundImage: '/assets/images/familieee/theme/the_nether.png',
            mascotImage: '/assets/images/familieee/theme/ghast.png',
            primaryColor: '#ff592e',
            textColor: '#EEEEEE',
            entriesRange: 'Points!I7:N103', // Likely don't need to change this
            pointsRange: 'Points!N7:N103' // Likely don't need to change this
        },
        {
            name: "El Macho's Muchachos",
            nickname: "El Macho's Muchachos",
            backgroundImage: '/assets/images/familieee/theme/the_end.png',
            mascotImage: '/assets/images/familieee/theme/Enderman.png',
            primaryColor: '#a354ff',
            textColor: '#EEEEEE',
            entriesRange: 'Points!P7:U103', // Likely don't need to change this
            pointsRange: 'Points!U7:U103' // Likely don't need to change this
        },
        {
            name: "Balthazar's Baddies",
            nickname: "Balthazar's Baddies",
            backgroundImage: '/assets/images/familieee/theme/the_end.png',
            mascotImage: '/assets/images/familieee/theme/Enderman.png',
            primaryColor: '#a354ff',
            textColor: '#EEEEEE',
            entriesRange: 'Points!W7:AB103', // Likely don't need to change this
            pointsRange: 'Points!AB7:AB103' // Likely don't need to change this
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
