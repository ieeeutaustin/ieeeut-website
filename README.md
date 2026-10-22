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

# Admin Dashboard: Creating Short URLs and Events

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

# How to update the FamilIEEE leaderboard

The [fam leaderboard](https://ieee.ece.utexas.edu/familieee/leaderboard) has two parts, and both read live from a Google Sheet:

- **Leaderboard pillars** (`src/components/FamLeaderboard/`): each fam's total points, shown as pillars with the winning fam's background.
- **Point History** (`src/components/FamPointHistory/`): a list of every entry, grouped by date, newest first.

The theme (names, colors, images, sheet location) all lives in one file: [src/utils/fam-config.ts](src/utils/fam-config.ts). You shouldn't need to touch the components.

## Quick overview (new semester checklist)

1. Make a copy of last semester's point tracker in Google Drive and clear the entries.
2. Share the copy with `ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com`.
3. Paste the new sheet's ID into `spreadsheetId` in `fam-config.ts`.
4. Update each fam's name, colors, and images in `fam-config.ts`.
5. Push to `main`. Vercel redeploys automatically.

## How the website reads the sheet

The site reads only the tab named **`Points`**. Other tabs (for example old semesters or challenge lists) are ignored, so don't rename it.

Each fam gets its own block of 6 columns on that tab, with one blank spacer column between blocks:

| Column in block | Meaning | Required? |
|---|---|---|
| 1st: **Type** | e.g. Kickoff, Weekly, Hangout | Yes, or the row is skipped |
| 2nd: **Date** | e.g. `9/29/2026` | Yes, or the row is skipped |
| 3rd: **Pics** | checkbox | No (not read by the site) |
| 4th: **Bonus Points** | | No (not read by the site) |
| 5th: **Desc (optional)** | shown under the type | No |
| 6th: **Points** | number of points | Blank counts as 0 |

Data starts on **row 7** and is read down to **row 103**. If you need more rows, increase `103` in the ranges in `fam-config.ts`.

These are the default blocks:

| Fam | Entries range | Points range |
|---|---|---|
| 1st | `Points!B7:G103` | `Points!G7:G103` |
| 2nd | `Points!I7:N103` | `Points!N7:N103` |
| 3rd | `Points!P7:U103` | `Points!U7:U103` |
| 4th | `Points!W7:AB103` | `Points!AB7:AB103` |

Each new block starts 7 columns after the previous one (so a 5th fam would be `AD7:AI103` and `AI7:AI103`).

### Rules to follow when entering points

- **Fill in Type, Date, and Points together.** A row with a Type but no Date will not show up in Point History.
- **Don't type placeholder Types in advance** (like "Weekly" in a row you plan to fill in later). Leave the whole row empty until you have the real entry.
- **The pillar totals add up the entire Points column**, whether or not a Type or Date is filled in. To remove points from the leaderboard, clear the **Points cell**, not just the Type.
- **Dates** should be real dates or `M/D/YYYY` text. They're displayed in Central Time.
- **Formulas are fine** in the Points column, as long as they return a number.

## Step-by-step: set up a new tracker

### 1. Copy the sheet and share it

1. Find the FamilIEEE Point Tracker in the Google Drive and make a copy.
2. Clear the old entries (keep the header rows and the `Points` tab name), then update the fam names and colors.
3. Click **Share** in the top right and add `ieee-ut-website@ieee-ut-website.iam.gserviceaccount.com`. The site only reads the sheet, so **Viewer** is enough, but giving it Editor access also works.
4. Copy the sheet ID from the URL. It's the part between `/d/` and `/edit`: `spreadsheets/d/ID_HERE/edit?...`
5. In `fam-config.ts`, paste it as `spreadsheetId`.

### 2. Add, remove, or rename fams

Each fam is one entry in the `fams` array in `fam-config.ts`:

```ts
{
    name: "Gru's Cru",
    nickname: "Gru's Cru",
    backgroundImage: '/assets/images/familieee/theme/the_overworld.png',
    mascotImage: '/assets/images/familieee/theme/bee.png',
    primaryColor: '#60ff36',
    textColor: '#EEEEEE',
    entriesRange: 'Points!B7:G103',
    pointsRange: 'Points!G7:G103'
},
```

| Field | What it does |
|---|---|
| `name` / `nickname` | Display names |
| `backgroundImage` | Full-page background shown while this fam is in **first place** |
| `mascotImage` | Character shown above the fam's pillar |
| `primaryColor` | Pillar color and the dot color in Point History |
| `textColor` | Text color on the pillar |
| `entriesRange` | The fam's whole 6-column block (used by Point History) |
| `pointsRange` | Just the Points column of that block (used by the pillars) |

**Important:** the ranges decide which part of the sheet a fam reads, and the `name` is just the label. Make sure each fam's name sits with the right ranges.

The layout adapts to however many fams are in the array. It was designed for 2 to 20 and has been used with 3 and 4 (3 to 8 looks best). To add a fam, add a new block to the sheet, then add a new entry with the next set of ranges.

### 3. Update the theme images

Each fam needs two images:

- a **mascot** (a transparent PNG looks best)
- a **background** for when they're winning

1. Save them in [public/assets/images/familieee/theme/](public/assets/images/familieee/theme/) with clear names.
2. In `fam-config.ts`, set `backgroundImage` and `mascotImage` to the path starting at `/assets/...` (don't include `public`).
3. Update `primaryColor` and `textColor` (hex codes).

## After you push: how long until it updates

The page is cached and re-reads the sheet at most **every 5 minutes** (`revalidate = 300` in `src/app/familieee/leaderboard/page.tsx`). After you edit the sheet:

1. Wait 5 minutes.
2. Refresh, wait a few seconds, then hard refresh (Cmd/Ctrl+Shift+R). The first visit after the cache expires triggers the update and the second shows it.

To see a change immediately, redeploy from the Vercel dashboard, or push an empty commit:

```bash
git commit --allow-empty -m "Rebuild"
git push
```

## Troubleshooting

| Problem | Likely cause |
|---|---|
| Build fails with `Cannot read properties of undefined (reading 'length')` on `/familieee/leaderboard` | A sheet row has a Type but no Date or Desc. Clear the row, fix the sheet, and redeploy. |
| Build fails with `Unexpected end of JSON input` | `GOOGLE_SERVICE_ACCOUNT_KEY` is missing in Vercel (Project Settings → Environment Variables). It's the service account JSON key, base64-encoded. |
| Leaderboard is empty or errors at runtime | The sheet isn't shared with the service account, or `spreadsheetId` is wrong. |
| Removed an entry but points are still showing | Clear the **Points** cell (totals sum the whole column), then wait 5 minutes or redeploy. |
| An entry is missing from Point History | It's missing a Type or Date. |
| Pillars or numbers look squished | Too many fams for the screen width. Shorten the names or reduce the number of fams. |
| New fam doesn't appear | Check that its `entriesRange` and `pointsRange` match its block in the sheet, and that the entry is inside the `fams` array. |

You're done! The point tracker is now connected to your themed leaderboard.
