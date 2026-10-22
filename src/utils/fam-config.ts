export const famConfig: famConfigType = {
    fams: [
        {
            name: "Gru's Cru",
            nickname: "Gru's Cru",
            backgroundImage: '/assets/images/familieee/theme/grus_bkgnd.png',
            mascotImage: '/assets/images/familieee/theme/grus_icon.png',
            primaryColor: '#f1c232',
            textColor: '#EEEEEE',
            entriesRange: 'Points!B7:G103', // Likely don't need to change this
            pointsRange: 'Points!G7:G103' // Likely don't need to change this
        },
        {
            name: "Vector's Villains",
            nickname: "Vector's Villains",
            backgroundImage: '/assets/images/familieee/theme/vectors_bkgnd.png',
            mascotImage: '/assets/images/familieee/theme/vectors_icon.png',
            primaryColor: '#ff592e',
            textColor: '#EEEEEE',
            entriesRange: 'Points!I7:N103', // Likely don't need to change this
            pointsRange: 'Points!N7:N103' // Likely don't need to change this
        },
        {
            name: "El Macho's Muchachos",
            nickname: "El Macho's Muchachos",
            backgroundImage: '/assets/images/familieee/theme/machos_bkgnd.png',
            mascotImage: '/assets/images/familieee/theme/machos_icon.png',
            primaryColor: '#980000',
            textColor: '#EEEEEE',
            entriesRange: 'Points!P7:U103', // Likely don't need to change this
            pointsRange: 'Points!U7:U103' // Likely don't need to change this
        },
        {
            name: "Balthazar's Baddies",
            nickname: "Balthazar's Baddies",
            backgroundImage: '/assets/images/familieee/theme/balthazars_bkgnd.png',
            mascotImage: '/assets/images/familieee/theme/balthazars_icon.png',
            primaryColor: '#351c75',
            textColor: '#EEEEEE',
            entriesRange: 'Points!W7:AB103', // Likely don't need to change this
            pointsRange: 'Points!AB7:AB103' // Likely don't need to change this
        },
    ],
    /*
        Make sure to share this spreadsheet with the associated Google Cloud service account. As of now that email is:
            'ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com'
    */
    spreadsheetId: "12YZos-1A7hebelOSnEuMMFJJM0zGtbhRBy5fm1EXg-g"
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
