export const famConfig: famConfigType = {
    fams: [
        {
            name: 'Agents',
            nickname: 'Agents',
            backgroundImage: '/assets/images/familieee/theme/lab_background.png',
            mascotImage: '/assets/images/familieee/theme/perry.png',
            primaryColor: '#41a59f',
            textColor: '#EEEEEE',
            entriesRange: 'Points!B7:G103', // Likely don't need to change this
            pointsRange: 'Points!G7:G103' // Likely don't need to change this
        },
        {
            name: 'Kids',
            nickname: 'Kids',
            backgroundImage: '/assets/images/familieee/theme/yard_background.jpg',
            mascotImage: '/assets/images/familieee/theme/phineas.png',
            primaryColor: '#eb9500',
            textColor: '#EEEEEE',
            entriesRange: 'Points!I7:N103', // Likely don't need to change this
            pointsRange: 'Points!N7:N103' // Likely don't need to change this
        },
        {
            name: 'LOVEMUFFIN',
            nickname: 'LOVEMUFFIN',
            backgroundImage: '/assets/images/familieee/theme/doof_background.jpg',
            mascotImage: '/assets/images/familieee/theme/dr_doof.png',
            primaryColor: '#434343',
            textColor: '#EEEEEE',
            entriesRange: 'Points!P7:U103', // Likely don't need to change this
            pointsRange: 'Points!U7:U103' // Likely don't need to change this
        }
    ],
    /*
        Make sure to share this spreadsheet with the associated Google Cloud service account. As of now that email is:
            'ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com'
    */
    spreadsheetId: "1PubALq-7sWpXj8fmgKDwsc9FLHdZyeDiBHgxR5hQFLA"
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