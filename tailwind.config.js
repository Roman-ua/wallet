/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/auth/bg.svg')",
        'dashboard-bg': "url('/dashboardMenuIcons/bg.jpg')"
      },
      boxShadow: {
        'mainShadow': '0 10px 15px -3px rgba(38, 198, 218, 0.3)',
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'right 6rem top 6rem'
      },
      width: {
        49: '49%'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
  darkMode: 'class'
};
