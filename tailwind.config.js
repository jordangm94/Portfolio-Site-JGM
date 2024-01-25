/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				grey: '#121212',
				black: '#000000',
				transparent: 'transparent',
				currentColor: 'currentColor',
				'purple-30': '#E1CFFE',
				purple: '#6B11F9',
				gold: '#FFBD4C',
				lilac: '#A1C4ED',
				'orange-50': '#FFF5E6',
				'orange-300': '#FFB366',
				'orange-800': '#FF6600',
				'lilac-60': '#B5CCEC',
				'lilac-30': '#E3EDFA',
				pink: '#BF1AA5',
				turquoise: '#25D0BC',
				dawn: '#C9CBE3',
				'dawn-30': '#EFEFF7',
				dusk: '#8687A8',
				blue: '#004E98',
				'light-blue': '#E8F0FB',
				'dark-blue': '#00264A',
				green: '#297373',
				'light-green': '#E1FAEC',
				red: '#C22929',
				'light-red': '#FBEAEA',
				white: '#FFFFFF',
				'off-white': '#F8F7FA',
				concrete: '#576B85',
				'light-grey': '#F1F6FB',
				current: 'currentColor',

				// Addendum
				'light-purple': '#f4ecfe',
				'light-yellow': '#fcf2dd',
				'light-pink': '#f5ddf2'
			}
		}
	},
	plugins: []
};
