import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1e3a8a',
        'gold': '#f59e0b',
        'light-gray': '#e5e7eb',
        'text-gray': '#4b5563',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "1rem", // 16px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#e6eeff",
              100: "#ccdeff",
              200: "#99bdff",
              300: "#669cff",
              400: "#337bff",
              500: "#1e3a8a",
              600: "#0052cc",
              700: "#003d99",
              800: "#002966",
              900: "#001433",
              DEFAULT: "#1e3a8a",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#fff8e6",
              100: "#fff1cc",
              200: "#ffe399",
              300: "#ffd566",
              400: "#ffc733",
              500: "#f59e0b",
              600: "#cc8400",
              700: "#996300",
              800: "#664200",
              900: "#332100",
              DEFAULT: "#f59e0b",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
