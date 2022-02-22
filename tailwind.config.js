module.exports = {
  enabled: true,
  mode: 'jit',
  darkMode: 'class', // class, 'media' or boolean
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
      'custom': '200px'
      },
      gridTemplateColumns: {
       'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      maxWidth: {
        'custom': '960px'
      }
    },
  },
  plugins: [],
}
