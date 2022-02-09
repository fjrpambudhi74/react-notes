module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
      'custom': '170px'
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
