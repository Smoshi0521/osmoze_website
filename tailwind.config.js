/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'design1': 'url("/assets/design1/BTU_Website_Illus003_BG.png")'
      },
      boxShadow:{
        'custom':'0px 20px 40px -10px rgba(0, 0, 0, 0.3)',
      },
      screens:{
        'sm': '445px'
      }
    },
  },
  plugins: [],
}
