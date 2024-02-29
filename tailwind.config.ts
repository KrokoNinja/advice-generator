import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': "hsl(193, 38%, 86%)",
        'neon-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)'
      },
      backgroundImage: theme => ({
        'desktop': "url('/pattern-divider-desktop.svg')",
        'mobile': "url('/pattern-divider-mobile.svg')",
      }),
      boxShadow: {
        '3xl': '0 0px 30px 5px hsl(150, 100%, 66%)',
      }
    },
  },
  plugins: [],
};
export default config;
