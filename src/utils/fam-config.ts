export const famConfig: famConfigType = {
    fams: [
        {
            name: "Peach's Palace",
            nickname: "Peach's Palace",
            backgroundImage: '/assets/images/familieee/theme/peachs_palace.jpg',
            mascotImage: '/assets/images/familieee/theme/peach.png',
            primaryColor: '#ff88d7',
            textColor: '#EEEEEE',
            entriesRange: 'Points!B7:G103', // Likely don't need to change this
            pointsRange: 'Points!G7:G103' // Likely don't need to change this
        },
        {
            name: "Luigi's Mansion",
            nickname: "Luigi's Mansion",
            backgroundImage: '/assets/images/familieee/theme/luigis_mansion.png',
            mascotImage: '/assets/images/familieee/theme/luigi.png',
            primaryColor: '#61ff75',
            textColor: '#EEEEEE',
            entriesRange: 'Points!I7:N103', // Likely don't need to change this
            pointsRange: 'Points!N7:N103' // Likely don't need to change this
        },
        {
            name: "Bowser's Castle",
            nickname: "Bowser's Castle",
            backgroundImage: '/assets/images/familieee/theme/bowsers_castle.png',
            mascotImage: '/assets/images/familieee/theme/bowser.png',
            primaryColor: '#fe3636',
            textColor: '#EEEEEE',
            entriesRange: 'Points!P7:U103', // Likely don't need to change this
            pointsRange: 'Points!U7:U103' // Likely don't need to change this
        },
        {
            name: "Yoshi's Island",
            nickname: "Yoshi's Island",
            backgroundImage: '/assets/images/familieee/theme/yoshis_island.jpg',
            mascotImage: '/assets/images/familieee/theme/yoshi.png',
            primaryColor: '#4a86e8',
            textColor: '#EEEEEE',
            entriesRange: 'Points!W7:AB103', // Likely don't need to change this
            pointsRange: 'Points!AB7:AB103' // Likely don't need to change this
        },
        {
            name: "Toad's Factory",
            nickname: "Toad's Factory",
            backgroundImage: '/assets/images/familieee/theme/toads_factory.png',
            mascotImage: '/assets/images/familieee/theme/toad.png',
            primaryColor: '#e6e620',
            textColor: '#EEEEEE',
            entriesRange: 'Points!AD7:AI103', // Likely don't need to change this
            pointsRange: 'Points!AI7:AI103' // Likely don't need to change this
        },
        {
            name: "DK's Jungle",
            nickname: "DK's Jungle",
            backgroundImage: '/assets/images/familieee/theme/dks_jungle.png',
            mascotImage: '/assets/images/familieee/theme/dk.png',
            primaryColor: '#994d42',
            textColor: '#EEEEEE',
            entriesRange: 'Points!AK7:AP103', // Likely don't need to change this
            pointsRange: 'Points!AP7:AP103' // Likely don't need to change this
        }
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
