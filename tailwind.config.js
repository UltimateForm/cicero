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
		extend: {
			height: {
				"fit-content": "fit-content"
			},
			minHeight: {
				10: "2.5rem",
				14: "3.5rem"
			},
			width: {
				"fit-content": "fit-content"
			},
			boxShadow: {
				"top-bottom-inner": "inset 0px 11px 8px -10px rgb(0 0 0 / 50%),inset 0px -11px 8px -10px rgb(0 0 0 / 50%)"
			}
		},
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
