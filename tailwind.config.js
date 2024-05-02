import { withUt } from "uploadthing/tw";
 
/** @type {import('tailwindcss').Config} */
module.exports = withUt({
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
});
