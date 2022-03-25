module.exports = {
  content: [
		"./src/**/*.{js,jsx}"
	],
  theme: {
    extend: {
			backgroundImage: {
				'banner': "url('/src/assets/banner-background.jpg')",
				'programmer-dashboard': "url('/src/assets/projects/programmer-dashboard.png')",
				'chattleship': "url('/src/assets/projects/chattleship.png')",
				'catro-gaming': "url('/src/assets/projects/catro-gaming.png')"
			},
			colors: {
				'offwhite': '#dddddd',
				'orange-hl': '#d8833e',
				'darkgrey': '#363636'
			}
		},
  },
  plugins: [],
}
