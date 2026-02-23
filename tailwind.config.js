module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './layouts/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        pal1: '#cad2c5',
        pal2: '#84a98c',
        pal3: '#52796f',
        pal4: '#354f52',
        pal5: '#2f3e46',
        primary: '#52796f',
        accent: '#354f52',
        dark: '#2f3e46',
        gold: '#84a98c',
      },
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};