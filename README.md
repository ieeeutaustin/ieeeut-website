# Admin Dashboard

## Sign In

- Go to [ieeeut.org/admin](https://ieeeut.org/admin)
- Sign in with Google using an IEEE account. Personal, non IEEE, accounts won't work.

## Short URLs
- After signing in, navigate to short URLs tab on the left side of the Admin dashboard.
- Existing short URLs might take a few seconds to load.

### Creating Short URLs
- Find the last & empty row at the end of the table.
- Enter the name and destination URL into the text fields.
- Press the "Add" button to submit your short URL.

### Editing Short URLs
- Press the "Edit" button on the row you'd like to edit.
- Make your changes.
- Press the "Save" button or cancel changes with "Cancel".

### Deleting Short URLs
- Press the "Delete" button the the row you'd like to delete.

## Events
- After signing in, navigate to the Events tab on the left side of the admin dashboard.
- Existing events might take a few seconds to load.

### Creating Events
- Press the green "+" button.
- Continue to edit the event and save it.
- If you press the "+" button, but don't edit and save, the event will not be created.

### Editing Events

#### Edit Event Text
- Press the "Edit Text" button on the event.
- Change the text inputs to your desired text.
- Follow the format for some text fields like date and time. (An empty text input will reveal the input format)
- Press the "Save" or "Cancel" button when you are done editing the text.

#### Edit Event RSVP
- Press the "Edit RSVP URL" button on the event.
- Enter your desired URL in the text input below.
- Press the "Save" or "Cancel" button when you are done editing the RSVP URL.

#### Edit Event Image
- Press the "New Image" button on the event.
- Either choose a file or enter a URL to the image (can be relative).
- When you are happy with the selected image, press the "Save" button.
- If you want to revert your change, press the "Cancel" button.

# How to update FamilIEEE leaderboard
If the [fam leaderboard](https://ieee.ece.utexas.edu/familieee/leaderboard) is still used, and you would like to change the theme of it, this section will cover how to do so. The leaderboard was programmed with changing the theme in mind, so this shouldn't be difficult.

## Quick Overview
All familieee leaderboard theme configuration will be customized through [src/utils/fam-config.ts](src/utils/fam-config.ts). In theory it should support more than 3 fams, but it has only been tested with 3. The only additional steps outside of customizing this file is (1) changing the images [public/assets/images/familieee/theme/](public/assets/images/familieee/theme/) to match your theme and (2) share the point tracker Google Sheet to Google Cloud service account (ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com).

**Note:** The familieee point tracker gsheet needs to be the same format for the software to read it correctly. You can make edits to the fam-config, but it is easier to leave it as is.

### Create your point tracker Google sheet
1. Find the FamilIEEE Point Tracker in the Google Drive and make a copy of it.
2. Clear the entries, change the colors and names.
3. Press 'Share' at the top right, and share to "ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com" giving the account, full perms (just to be safe). This permits the Google Drive API to view our point tracker.

4. a) Copy the GSheet Id, which you can find in the URL. It will look like this `spreadsheets/d/ID_HERE/edit?...`

    b) Inside the [fam-config.ts](src/utils/fam-config.ts) file, paste the copied string as the spreadsheetId field's value.

### Update the fam names
1. Go to the [fam-config.ts](src/utils/fam-config.ts) file. *Notice how each fam is an entry in the "fams" array.*
2. Change the names and nicknames of the fams in each entry to match the fams on your point tracker. Order here does matter, it must match the gsheet.

### Update the fam theme images
You will need 2 images for each familieee. One for the character/mascot and one for the background that displays when they are winning.
1. Save your selected images inside the folder [public/assets/images/familieee/theme/](public/assets/images/familieee/theme/), and rename them to something clear to help you out later.
2. Go to the [fam-config.ts](src/utils/fam-config.ts) file.
3. For each fam, update the background image and mascot image fields to the image path you saved previously.
4. Also update the primary and text colors for each fam.

You are done! Your point tracker should now be connected to your themed fam leaderboard! (it can take up to 5 minutes to update sometimes)

# Get started with development

Clone with

```bash
git clone https://github.com/ieeeutaustin/ieeeut-website.git
```

Install [Node.js](https://nodejs.org/en) and install dependencies with

```bash
npm i
```

After it's done downloading, you should be able to run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
