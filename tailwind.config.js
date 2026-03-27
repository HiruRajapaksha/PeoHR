/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#88A646', // PeoHR Green
          dark: '#1A1C1B',    // Premium Charcoal
          light: '#A3BC71',   // Lighter Green
        },
        secondary: {
          DEFAULT: '#654D65', // PeoHR Purple
          light: '#826A82',
          dark: '#4D3A4D',
        },
        accent: {
          DEFAULT: '#88A646',
          light: '#A3BC71',
          dark: '#6D8538',
        },
        neutral: {
          DEFAULT: '#B4B6B5', // PeoHR Grey
          light: '#D1D3D2',
          dark: '#8E908F',
        },
        surface: '#1A1C1B',
        muted: '#B4B6B5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
