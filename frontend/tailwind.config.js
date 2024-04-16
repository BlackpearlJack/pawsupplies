/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'dark-magenta': '#38023b',
      'magenta': '#7e0585',
      'light-grayish-red':'#d9b2b2',
      'dark-green':'#1f2f16',
      'gray-blue':'#5a7684'

    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    ('tailwindcss/plugin'),    
  ],
}

