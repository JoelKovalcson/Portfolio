module.exports = {
  content: [
		"./src/**/*.{js,jsx}"
	],
  theme: {
    extend: {
			backgroundImage: {
				'banner': "url('/src/assets/banner-background.jpg')"
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
