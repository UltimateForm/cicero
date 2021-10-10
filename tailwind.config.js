const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: true, // Or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sen: ["Sen", "sans-serif"]
		},
		colors: {
			ebonyClay: "#1f2937",
			riverBed: "#4c5666",
			pattensBlue: "#dbf2ff",
			goldenGrass: "#dea01e",
			...defaultTheme.colors
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
